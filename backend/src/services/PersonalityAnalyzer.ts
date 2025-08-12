import { Answer, DimensionScores, PersonalityProfile, PersonalityType, Question } from '../types'
import { personalityTypes, getPersonalityTypeById } from '../models/PersonalityType'

export class PersonalityAnalyzer {
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
  determinePersonalityType(dimensionScores: DimensionScores): PersonalityType {
    const matches = personalityTypes.map(type => ({
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
  private generateRecommendations(scores: DimensionScores, type: PersonalityType) {
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

  /**
   * 获取所有人格类型的匹配度排名
   */
  getAllTypeMatches(dimensionScores: DimensionScores) {
    return personalityTypes.map(type => ({
      type,
      matchScore: Math.round(this.calculateMatchScore(dimensionScores, type.dimensionWeights)),
      confidence: Math.round(this.calculateConfidence(dimensionScores, type.dimensionWeights))
    })).sort((a, b) => b.matchScore - a.matchScore)
  }
}