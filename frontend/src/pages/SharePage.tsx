import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { completeLocalApi } from '../services/completeLocalApi'
import { AssessmentResult } from '../services/api'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import RadarChart from '../components/RadarChart'

const SharePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadResult = async () => {
      if (!id) return

      try {
        setIsLoading(true)
        const response = await completeLocalApi.getResult(id)
        setResult(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取结果失败')
      } finally {
        setIsLoading(false)
      }
    }

    loadResult()
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="正在加载分享内容..." />
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="text-center max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-4">内容不存在</h2>
          <p className="text-neutral-light/80 mb-6">{error || '分享内容不存在或已被删除'}</p>
          <Link to="/">
            <Button>返回首页</Button>
          </Link>
        </Card>
      </div>
    )
  }

  const { personalityProfile } = result
  const { personalityType, dimensionScores, matchScore, confidence } = personalityProfile

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 分享标识 */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-light mb-2">
              街舞人格测评结果分享
            </h1>
            <p className="text-neutral-light/60">
              来看看这位舞者的人格类型吧！
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 人格类型展示 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="text-center h-full">
              <div className="mb-6">
                <div 
                  className="w-24 h-24 mx-auto rounded-full mb-4 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: personalityType.colorScheme.primary + '20' }}
                >
                  🎭
                </div>
                <h2 className="text-2xl font-bold text-neutral-light mb-2">
                  {personalityType.name}
                </h2>
                <p className="text-lg text-primary-purple font-medium mb-4">
                  {personalityType.nickname}
                </p>
                <p className="text-neutral-light/80 leading-relaxed text-sm">
                  {personalityType.description}
                </p>
              </div>

              <div className="flex justify-center space-x-6 text-center mb-6">
                <div>
                  <div className="text-xl font-bold text-secondary-green">
                    {matchScore}%
                  </div>
                  <div className="text-xs text-neutral-light/60">匹配度</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-secondary-yellow">
                    {confidence}%
                  </div>
                  <div className="text-xs text-neutral-light/60">置信度</div>
                </div>
              </div>

              {/* 特征标签 */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-light mb-2 flex items-center justify-center">
                  <Star className="w-4 h-4 text-secondary-yellow mr-1" />
                  核心特征
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalityType.characteristics.slice(0, 3).map((char, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-purple/20 text-primary-purple rounded-full text-xs"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 推荐舞种 */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-light mb-2">推荐舞种</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {personalityType.recommendedStyles.map((style, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary-green/20 text-secondary-green rounded-full text-xs"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 雷达图 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <h3 className="text-lg font-bold text-neutral-light mb-4 text-center">
                人格维度分析
              </h3>
              <div className="h-64 mb-4">
                <RadarChart scores={dimensionScores} />
              </div>
              <div className="space-y-2 text-sm">
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
        </div>

        {/* 行动号召 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary-purple/10 to-secondary-emerald/10">
            <h3 className="text-xl font-bold text-neutral-light mb-4">
              想知道你的街舞人格类型吗？
            </h3>
            <p className="text-neutral-light/80 mb-6">
              通过科学的心理测评，发现你独特的街舞灵魂！
              只需几分钟，就能获得专属于你的人格画像。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="w-full sm:w-auto flex items-center space-x-2">
                  <span>开始我的测评</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/personality-types">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  了解所有人格类型
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>

        {/* 页脚信息 */}
        <div className="mt-8 text-center text-sm text-neutral-light/60">
          <p>基于心理学理论与街舞文化的科学测评平台</p>
        </div>
      </div>
    </div>
  )
}

export default SharePage