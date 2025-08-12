import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import { Question, Answer, PersonalityProfile } from '../types'

interface AssessmentState {
  // 当前测评状态
  currentQuestionIndex: number
  questions: Question[]
  answers: Answer[]
  isLoading: boolean
  error: string | null
  
  // 测评结果
  result: PersonalityProfile | null
  assessmentId: string | null
  
  // Actions
  setQuestions: (questions: Question[]) => void
  setCurrentQuestionIndex: (index: number) => void
  addAnswer: (answer: Answer) => void
  updateAnswer: (questionId: string, score: number) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setResult: (result: PersonalityProfile, assessmentId: string) => void
  resetAssessment: () => void
  
  // Computed
  progress: number
  isComplete: boolean
  canGoNext: boolean
  canGoPrevious: boolean
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
      // Initial state
      currentQuestionIndex: 0,
      questions: [],
      answers: [],
      isLoading: false,
      error: null,
      result: null,
      assessmentId: null,

      // Actions
      setQuestions: (questions) => set({ questions }),
      
      setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
      
      addAnswer: (answer) => set((state) => {
        const existingIndex = state.answers.findIndex(a => a.questionId === answer.questionId)
        if (existingIndex >= 0) {
          const newAnswers = [...state.answers]
          newAnswers[existingIndex] = answer
          return { answers: newAnswers }
        }
        return { answers: [...state.answers, answer] }
      }),
      
      updateAnswer: (questionId, score) => set((state) => {
        const existingIndex = state.answers.findIndex(a => a.questionId === questionId)
        const answer = { questionId, score }
        
        if (existingIndex >= 0) {
          const newAnswers = [...state.answers]
          newAnswers[existingIndex] = answer
          return { answers: newAnswers }
        }
        return { answers: [...state.answers, answer] }
      }),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      setError: (error) => set({ error }),
      
      setResult: (result, assessmentId) => set({ result, assessmentId }),
      
      resetAssessment: () => set({
        currentQuestionIndex: 0,
        questions: [],
        answers: [],
        isLoading: false,
        error: null,
        result: null,
        assessmentId: null
      }),

      // Computed properties
      get progress() {
        const state = get()
        if (state.questions.length === 0) return 0
        return (state.answers.length / state.questions.length) * 100
      },

      get isComplete() {
        const state = get()
        return state.answers.length === state.questions.length && state.questions.length > 0
      },

      get canGoNext() {
        const state = get()
        return state.currentQuestionIndex < state.questions.length - 1
      },

      get canGoPrevious() {
        const state = get()
        return state.currentQuestionIndex > 0
      }
    }))