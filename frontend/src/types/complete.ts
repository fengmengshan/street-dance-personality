// 完整版本的类型定义，避免TypeScript错误
export interface CompleteQuestion {
  id: string
  content: string
  category: string
  dimension: string
  isReverse: boolean
  danceStyles: string[]
  scenarioType: string
  orderIndex: number
}

export interface CompletePersonalityType {
  id: string
  name: string
  nickname: string
  description: string
  characteristics: string[]
  strengths: string[]
  recommendedStyles: string[]
  developmentSuggestions: string[]
  avatarUrl: string
  colorScheme: {
    primary: string
    secondary: string
    accent: string
  }
  dimensionWeights: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
}

export interface CompleteAnswer {
  questionId: string
  score: number
}

export interface CompleteDimensionScores {
  openness: number
  conscientiousness: number
  extraversion: number
  agreeableness: number
  neuroticism: number
}

export interface CompletePersonalityProfile {
  personalityType: CompletePersonalityType
  dimensionScores: CompleteDimensionScores
  matchScore: number
  confidence: number
  recommendations: {
    danceStyles: string[]
    developmentAreas: string[]
    teamRole: string
  }
}