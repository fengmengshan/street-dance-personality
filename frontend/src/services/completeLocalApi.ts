// 完整的本地API实现 - 包含完整的人格分析算法
import { fullQuestions } from '../data/fullQuestions'
import { fullPersonalityTypes } from '../data/fullPersonalityTypes'
import { Question, Answer, PersonalityProfile, DimensionScores } from '../types'

// 模拟API响应格式
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  total?: number
}

// 完整的人格分析算法
class PersonalityAnalyzer {
  /**
   * 计算各维度得分
   */
  calculateDimensionScores(answers: Answer[], questions: any[]): DimensionScores {
    const dimensionTotals = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0
    }

    const dimensionCounts = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0
    }

    // 计算每个维度的总分和题目数量
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId)
      if (!question) return

      let score = answer.score
      // 反向计分题目需要转换分数 (1->5, 2->4, 3->3, 4->2, 5->1)
      if (question.isReverse) {
        score = 6 - score
      }

      const dimension = question.dimension.toLowerCase() as keyof DimensionScores
      dimensionTotals[dimension] += score
      dimensionCounts[dimension] += 1
    })

    // 计算平均分并标准化到0-100范围
    const dimensionScores: DimensionScores = {
      openness: this.normalizeScore(dimensionTotals.openness / dimensionCounts.openness),
      conscientiousness: this.normalizeScore(dimensionTotals.conscientiousness / dimensionCounts.conscientiousness),
      extraversion: this.normalizeScore(dimensionTotals.extraversion / dimensionCounts.extraversion),
      agreeableness: this.normalizeScore(dimensionTotals.agreeableness / dimensionCounts.agreeableness),
      neuroticism: this.normalizeScore(dimensionTotals.neuroticism / dimensionCounts.neuroticism)
    }

    return dimensionScores
  }

  /**
   * 将1-5分数标准化到0-100范围
   */
  private normalizeScore(score: number): number {
    if (isNaN(score)) return 50 // 默认中等分数
    return Math.round(((score - 1) / 4) * 100)
  }

  /**
   * 确定最匹配的人格类型
   */
  determinePersonalityType(dimensionScores: DimensionScores): any {
    const matches = fullPersonalityTypes.map(type => ({
      type,
      matchScore: this.calculateMatchScore(dimensionScores, type.dimensionWeights),
      confidence: this.calculateConfidence(dimensionScores, type.dimensionWeights)
    }))

    // 按匹配分数排序
    matches.sort((a, b) => b.matchScore - a.matchScore)

    return matches[0].type
  }

  /**
   * 计算与特定人格类型的匹配分数
   */
  private calculateMatchScore(userScores: DimensionScores, typeWeights: DimensionScores): number {
    const dimensions: (keyof DimensionScores)[] = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']
    
    let totalScore = 0
    let totalWeight = 0

    dimensions.forEach(dimension => {
      const userScore = userScores[dimension] / 100 // 标准化到0-1
      const typeWeight = typeWeights[dimension]
      
      // 计算相似度 (1 - 差异的绝对值)
      const similarity = 1 - Math.abs(userScore - typeWeight)
      
      // 加权计算
      totalScore += similarity * typeWeight
      totalWeight += typeWeight
    })

    return (totalScore / totalWeight) * 100
  }

  /**
   * 计算匹配置信度
   */
  private calculateConfidence(userScores: DimensionScores, typeWeights: DimensionScores): number {
    const dimensions: (keyof DimensionScores)[] = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']
    
    let totalDifference = 0
    dimensions.forEach(dimension => {
      const userScore = userScores[dimension] / 100
      const typeWeight = typeWeights[dimension]
      totalDifference += Math.abs(userScore - typeWeight)
    })

    // 置信度与平均差异成反比
    const averageDifference = totalDifference / dimensions.length
    return Math.max(0, Math.min(100, (1 - averageDifference) * 100))
  }

  /**
   * 生成完整的人格画像
   */
  generatePersonalityProfile(dimensionScores: DimensionScores): PersonalityProfile {
    const personalityType = this.determinePersonalityType(dimensionScores)
    const matchScore = this.calculateMatchScore(dimensionScores, personalityType.dimensionWeights)
    const confidence = this.calculateConfidence(dimensionScores, personalityType.dimensionWeights)

    // 生成个性化推荐
    const recommendations = this.generateRecommendations(dimensionScores, personalityType)

    return {
      personalityType,
      dimensionScores,
      matchScore: Math.round(matchScore),
      confidence: Math.round(confidence),
      recommendations
    }
  }

  /**
   * 生成个性化推荐
   */
  private generateRecommendations(scores: DimensionScores, type: any) {
    const recommendations = {
      danceStyles: [...type.recommendedStyles],
      developmentAreas: [],
      teamRole: ''
    }

    // 基于维度分数生成发展建议
    const developmentAreas: string[] = []

    if (scores.openness < 40) {
      developmentAreas.push('尝试更多创新和实验性的动作')
    }
    if (scores.conscientiousness < 40) {
      developmentAreas.push('制定更规律的练习计划')
    }
    if (scores.extraversion < 40) {
      developmentAreas.push('增加与其他舞者的互动交流')
    }
    if (scores.agreeableness < 40) {
      developmentAreas.push('多参与团队合作和协作项目')
    }
    if (scores.neuroticism > 60) {
      developmentAreas.push('学习压力管理和放松技巧')
    }

    recommendations.developmentAreas = developmentAreas

    // 确定团队角色
    if (scores.extraversion > 70 && scores.agreeableness > 60) {
      recommendations.teamRole = '团队领导者'
    } else if (scores.agreeableness > 70) {
      recommendations.teamRole = '团队协调者'
    } else if (scores.openness > 70) {
      recommendations.teamRole = '创意贡献者'
    } else if (scores.conscientiousness > 70) {
      recommendations.teamRole = '技术专家'
    } else {
      recommendations.teamRole = '全能型成员'
    }

    return recommendations
  }
}

const analyzer = new PersonalityAnalyzer()

// 完整的本地API实现
export const completeLocalApi = {
  // 获取题目
  getQuestions: (): Promise<ApiResponse<Question[]>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: fullQuestions as Question[],
          total: fullQuestions.length
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
        // 计算维度得分
        const dimensionScores = analyzer.calculateDimensionScores(answers, fullQuestions)
        
        // 生成人格画像
        const personalityProfile = analyzer.generatePersonalityProfile(dimensionScores)
        
        resolve({
          success: true,
          data: {
            assessmentId: 'local-' + Date.now(),
            personalityProfile,
            completedAt: new Date().toISOString()
          }
        })
      }, 1500) // 稍长的延迟模拟真实分析过程
    })
  },

  // 获取测评结果
  getResult: (id: string): Promise<ApiResponse<{
    assessmentId: string
    personalityProfile: PersonalityProfile
    completedAt: string
    isShared: boolean
  }>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 从localStorage获取结果或生成示例结果
        const storedResult = localStorage.getItem(`assessment-${id}`)
        if (storedResult) {
          resolve({
            success: true,
            data: JSON.parse(storedResult)
          })
        } else {
          // 生成示例结果
          const exampleScores: DimensionScores = {
            openness: 75,
            conscientiousness: 65,
            extraversion: 80,
            agreeableness: 70,
            neuroticism: 35
          }
          const personalityProfile = analyzer.generatePersonalityProfile(exampleScores)
          
          resolve({
            success: true,
            data: {
              assessmentId: id,
              personalityProfile,
              completedAt: new Date().toISOString(),
              isShared: false
            }
          })
        }
      }, 300)
    })
  },

  // 分享测评结果
  share: (id: string): Promise<ApiResponse<{
    assessmentId: string
    isShared: boolean
    shareUrl: string
  }>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            assessmentId: id,
            isShared: true,
            shareUrl: `${window.location.origin}/share/${id}`
          }
        })
      }, 500)
    })
  },

  // 获取人格类型
  getPersonalityTypes: (): Promise<ApiResponse<typeof fullPersonalityTypes>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: fullPersonalityTypes,
          total: fullPersonalityTypes.length
        })
      }, 300)
    })
  },

  // 根据ID获取人格类型
  getPersonalityTypeById: (id: string): Promise<ApiResponse<any>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const type = fullPersonalityTypes.find(t => t.id === id)
        if (type) {
          resolve({
            success: true,
            data: type
          })
        } else {
          resolve({
            success: false,
            data: null,
            message: '人格类型不存在'
          })
        }
      }, 300)
    })
  }
}