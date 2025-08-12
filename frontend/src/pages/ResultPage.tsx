import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Share2, RotateCcw, Star, TrendingUp } from 'lucide-react'
import { useAssessmentStore } from '../store/useAssessmentStore'
import { assessmentsApi } from '../services/api'
import { AssessmentResult } from '../services/api'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import RadarChart from '../components/RadarChart'

const ResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSharing, setIsSharing] = useState(false)
  
  const { result: storeResult, resetAssessment } = useAssessmentStore()

  useEffect(() => {
    const loadResult = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        
        // 如果store中有结果且ID匹配，直接使用
        if (storeResult && useAssessmentStore.getState().assessmentId === id) {
          setResult({
            assessmentId: id,
            personalityProfile: storeResult,
            completedAt: new Date().toISOString()
          })
          return
        }

        // 否则从API获取
        const response = await assessmentsApi.getResult(id)
        setResult(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取结果失败')
      } finally {
        setIsLoading(false)
      }
    }

    loadResult()
  }, [id, storeResult])

  const handleShare = async () => {
    if (!id) return

    try {
      setIsSharing(true)
      const response = await assessmentsApi.share(id)
      
      if (navigator.share) {
        await navigator.share({
          title: '我的街舞人格测评结果',
          text: `我是${result?.personalityProfile.personalityType.name}！快来看看你的街舞人格类型吧！`,
          url: response.data.shareUrl
        })
      } else {
        // 复制到剪贴板
        await navigator.clipboard.writeText(response.data.shareUrl)
        alert('分享链接已复制到剪贴板！')
      }
    } catch (err) {
      console.error('分享失败:', err)
      alert('分享失败，请稍后重试')
    } finally {
      setIsSharing(false)
    }
  }

  const handleNewAssessment = () => {
    resetAssessment()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="正在加载结果..." />
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="text-center max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-4">加载失败</h2>
          <p className="text-neutral-light/80 mb-6">{error || '结果不存在'}</p>
          <Link to="/">
            <Button>返回首页</Button>
          </Link>
        </Card>
      </div>
    )
  }

  const { personalityProfile } = result
  const { personalityType, dimensionScores, matchScore, confidence, recommendations } = personalityProfile

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 头部操作 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-light">
            你的街舞人格画像
          </h1>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handleShare}
              isLoading={isSharing}
              className="flex items-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>分享</span>
            </Button>
            <Link to="/assessment">
              <Button
                variant="ghost"
                onClick={handleNewAssessment}
                className="flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>重新测评</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主要结果 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 人格类型卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center">
                <div className="mb-6">
                  <div 
                    className="w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center text-6xl"
                    style={{ backgroundColor: personalityType.colorScheme.primary + '20' }}
                  >
                    🎭
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-light mb-2">
                    {personalityType.name}
                  </h2>
                  <p className="text-lg text-primary-purple font-medium mb-4">
                    {personalityType.nickname}
                  </p>
                  <p className="text-neutral-light/80 leading-relaxed">
                    {personalityType.description}
                  </p>
                </div>

                <div className="flex justify-center space-x-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary-emerald">
                      {matchScore}%
                    </div>
                    <div className="text-sm text-neutral-light/60">匹配度</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-orange">
                      {confidence}%
                    </div>
                    <div className="text-sm text-neutral-light/60">置信度</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 特征描述 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-neutral-light mb-4 flex items-center">
                  <Star className="w-5 h-5 text-accent-orange mr-2" />
                  你的特征
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-neutral-light mb-3">性格特点</h4>
                    <ul className="space-y-2">
                      {personalityType.characteristics.map((char, index) => (
                        <li key={index} className="text-neutral-light/80 flex items-start">
                          <span className="text-primary-orange mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-light mb-3">核心优势</h4>
                    <ul className="space-y-2">
                      {personalityType.strengths.map((strength, index) => (
                        <li key={index} className="text-neutral-light/80 flex items-start">
                          <span className="text-secondary-green mr-2">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 推荐建议 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <h3 className="text-xl font-bold text-neutral-light mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary-cyan mr-2" />
                  个性化建议
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-neutral-light mb-3">推荐舞种</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalityType.recommendedStyles.map((style, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-orange/20 text-primary-orange rounded-full text-sm"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-light mb-3">团队角色</h4>
                    <span className="px-3 py-1 bg-secondary-green/20 text-secondary-green rounded-full text-sm">
                      {recommendations.teamRole}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-light mb-3">发展方向</h4>
                    <ul className="space-y-1">
                      {recommendations.developmentAreas.slice(0, 3).map((area, index) => (
                        <li key={index} className="text-sm text-neutral-light/80">
                          • {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-8">
            {/* 雷达图 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <h3 className="text-lg font-bold text-neutral-light mb-4 text-center">
                  人格维度分析
                </h3>
                <div className="h-80">
                  <RadarChart scores={dimensionScores} />
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  {Object.entries(dimensionScores).map(([key, value]) => {
                    const labels: Record<string, string> = {
                      openness: '开放性',
                      conscientiousness: '尽责性',
                      extraversion: '外向性',
                      agreeableness: '宜人性',
                      neuroticism: '神经质'
                    }
                    return (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-neutral-light/80">{labels[key]}</span>
                        <span className="font-semibold text-neutral-light">{value}分</span>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </motion.div>

            {/* 发展建议 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-lg font-bold text-neutral-light mb-4">
                  成长建议
                </h3>
                <ul className="space-y-3">
                  {personalityType.developmentSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-neutral-light/80 flex items-start">
                      <span className="text-secondary-green mr-2 mt-1">→</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* 底部操作 */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/personality-types">
              <Button variant="outline" className="w-full sm:w-auto">
                了解所有人格类型
              </Button>
            </Link>
            <Link to="/assessment">
              <Button onClick={handleNewAssessment} className="w-full sm:w-auto">
                重新开始测评
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultPage