import axios from 'axios'
import { Question, Answer, PersonalityProfile, PersonalityType } from '../types'

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证token等
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || '网络请求失败'
    return Promise.reject(new Error(message))
  }
)

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  total?: number
}

export interface AssessmentResult {
  assessmentId: string
  personalityProfile: PersonalityProfile
  completedAt: string
}

// 题目相关API
export const questionsApi = {
  // 获取所有题目
  getAll: (): Promise<ApiResponse<Question[]>> => 
    api.get('/questions'),

  // 获取随机题目
  getRandom: (count: number = 62): Promise<ApiResponse<Question[]>> => 
    api.get(`/questions/random?count=${count}`),

  // 根据ID获取题目
  getById: (id: string): Promise<ApiResponse<Question>> => 
    api.get(`/questions/${id}`)
}

// 测评相关API
export const assessmentsApi = {
  // 提交测评答案
  submit: (answers: Answer[], userId?: string): Promise<ApiResponse<AssessmentResult>> => 
    api.post('/assessments/submit', { answers, userId }),

  // 获取测评结果
  getResult: (id: string): Promise<ApiResponse<AssessmentResult>> => 
    api.get(`/assessments/${id}`),

  // 分享测评结果
  share: (id: string): Promise<ApiResponse<{ assessmentId: string; isShared: boolean; shareUrl: string }>> => 
    api.post(`/assessments/${id}/share`),

  // 获取用户测评历史
  getUserHistory: (userId: string, page: number = 1, limit: number = 10): Promise<ApiResponse<any[]>> => 
    api.get(`/assessments/user/${userId}?page=${page}&limit=${limit}`)
}

// 人格类型相关API
export const personalityTypesApi = {
  // 获取所有人格类型
  getAll: (): Promise<ApiResponse<PersonalityType[]>> => 
    api.get('/personality-types'),

  // 根据ID获取人格类型
  getById: (id: string): Promise<ApiResponse<PersonalityType>> => 
    api.get(`/personality-types/${id}`),

  // 获取人格类型摘要
  getSummary: (): Promise<ApiResponse<Partial<PersonalityType>[]>> => 
    api.get('/personality-types/summary')
}

export default api