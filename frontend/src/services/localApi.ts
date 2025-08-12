// 本地API - 用于纯前端版本
import { localQuestions, localPersonalityTypes } from '../data/localQuestions'
import { Question, Answer, PersonalityProfile, DimensionScores } from '../types'

// 模拟API响应格式
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  total?: number
}

// 简化的人格分析算法
function analyzePersonality(answers: Answer[]): PersonalityProfile {
  // 计算维度得分
  const dimensionScores: DimensionScores = {
    openness: Math.floor(Math.random() * 100),
    conscientiousness: Math.floor(Math.random() * 100),
    extraversion: Math.floor(Math.random() * 100),
    agreeableness: Math.floor(Math.random() * 100),
    neuroticism: Math.floor(Math.random() * 100)
  }

  // 随机选择一个人格类型（实际应该基于得分计算）
  const personalityType = localPersonalityTypes[0]

  return {
    personalityType,
    dimensionScores,
    matchScore: 85,
    confidence: 78,
    recommendations: {
      danceStyles: personalityType.recommendedStyles,
      developmentAreas: personalityType.developmentSuggestions.slice(0, 3),
      teamRole: '创意贡献者'
    }
  }
}

// 本地API实现
export const localApi = {
  // 获取题目
  getQuestions: (): Promise<ApiResponse<Question[]>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: localQuestions as Question[],
          total: localQuestions.length
        })
      }, 500)
    })
  },

  // 提交测评
  submitAssessment: (answers: Answer[]): Promise<ApiResponse<{
    assessmentId: string
    personalityProfile: PersonalityProfile
    completedAt: string
  }>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const personalityProfile = analyzePersonality(answers)
        resolve({
          success: true,
          data: {
            assessmentId: 'local-' + Date.now(),
            personalityProfile,
            completedAt: new Date().toISOString()
          }
        })
      }, 1000)
    })
  },

  // 获取人格类型
  getPersonalityTypes: (): Promise<ApiResponse<typeof localPersonalityTypes>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: localPersonalityTypes,
          total: localPersonalityTypes.length
        })
      }, 300)
    })
  }
}