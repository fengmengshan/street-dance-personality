export enum QuestionCategory {
  BATTLE_PERFORMANCE = 'BATTLE_PERFORMANCE',
  CYPHER_INTERACTION = 'CYPHER_INTERACTION',
  MUSIC_SENSITIVITY = 'MUSIC_SENSITIVITY',
  LEARNING_STYLE = 'LEARNING_STYLE',
  TEAM_COLLABORATION = 'TEAM_COLLABORATION',
  CREATIVE_EXPRESSION = 'CREATIVE_EXPRESSION'
}

export enum PersonalityDimension {
  OPENNESS = 'OPENNESS',
  CONSCIENTIOUSNESS = 'CONSCIENTIOUSNESS',
  EXTRAVERSION = 'EXTRAVERSION',
  AGREEABLENESS = 'AGREEABLENESS',
  NEUROTICISM = 'NEUROTICISM'
}

export enum DanceStyle {
  HIPHOP = 'HIPHOP',
  POPPING = 'POPPING',
  LOCKING = 'LOCKING',
  BREAKING = 'BREAKING',
  HOUSE = 'HOUSE',
  KRUMP = 'KRUMP',
  WAACKING = 'WAACKING',
  VOGUING = 'VOGUING',
  ANIMATION = 'ANIMATION',
  ROBOT = 'ROBOT'
}

export enum ScenarioType {
  CYPHER = 'CYPHER',
  BATTLE = 'BATTLE',
  PRACTICE = 'PRACTICE',
  PERFORMANCE = 'PERFORMANCE',
  LEARNING = 'LEARNING',
  SOCIAL = 'SOCIAL'
}

export interface Question {
  id: string
  content: string
  category: QuestionCategory
  dimension: PersonalityDimension
  isReverse: boolean
  danceStyles: DanceStyle[]
  scenarioType: ScenarioType
  orderIndex: number
}

export interface Answer {
  questionId: string
  score: number
}

export interface DimensionScores {
  openness: number
  conscientiousness: number
  extraversion: number
  agreeableness: number
  neuroticism: number
}

export interface PersonalityType {
  id: string
  name: string
  nickname: string
  description: string
  characteristics: string[]
  strengths: string[]
  recommendedStyles: DanceStyle[]
  developmentSuggestions: string[]
  avatarUrl: string
  colorScheme: {
    primary: string
    secondary: string
    accent: string
  }
}

export interface PersonalityProfile {
  personalityType: PersonalityType
  dimensionScores: DimensionScores
  matchScore: number
  confidence: number
  recommendations: {
    danceStyles: DanceStyle[]
    developmentAreas: string[]
    teamRole: string
  }
}

export interface AssessmentResult {
  id: string
  personalityProfile: PersonalityProfile
  completedAt: string
  isShared: boolean
}