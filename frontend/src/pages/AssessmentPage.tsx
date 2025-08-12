import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAssessmentStore } from '../store/useAssessmentStore'
import { questionsApi, assessmentsApi } from '../services/api'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProgressBar from '../components/ui/ProgressBar'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const AssessmentPage: React.FC = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    currentQuestionIndex,
    questions,
    answers,
    isLoading,
    error,
    progress,
    isComplete,
    canGoNext,
    canGoPrevious,
    setQuestions,
    setCurrentQuestionIndex,
    updateAnswer,
    setLoading,
    setError,
    setResult
  } = useAssessmentStore()

  // 加载题目
  useEffect(() => {
    const loadQuestions = async () => {
      if (questions.length > 0) return // 已经加载过了
      
      try {
        setLoading(true)
        const response = await questionsApi.getRandom(62)
        setQuestions(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载题目失败')
      } finally {
        setLoading(false)
      }
    }

    loadQuestions()
  }, [questions.length, setQuestions, setLoading, setError])

  // 获取当前题目
  const currentQuestion = questions[currentQuestionIndex]
  
  // 获取当前题目的答案
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id)
  
  // 检查是否可以进入下一题
  const canProceed = currentAnswer !== undefined

  // 处理答案选择
  const handleAnswerSelect = (score: number) => {
    if (!currentQuestion) return
    updateAnswer(currentQuestion.id, score)
  }

  // 下一题
  const handleNext = () => {
    if (canGoNext && canProceed) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // 上一题
  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  // 提交测评
  const handleSubmit = async () => {
    if (!isComplete) return

    try {
      setIsSubmitting(true)
      const response = await assessmentsApi.submit(answers)
      setResult(response.data.personalityProfile, response.data.assessmentId)
      navigate(`/result/${response.data.assessmentId}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交测评失败')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 李克特量表选项
  const likertOptions = [
    { value: 1, label: '非常不同意', color: 'bg-red-500' },
    { value: 2, label: '不同意', color: 'bg-orange-500' },
    { value: 3, label: '中立', color: 'bg-yellow-500' },
    { value: 4, label: '同意', color: 'bg-green-500' },
    { value: 5, label: '非常同意', color: 'bg-emerald-500' }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="正在加载题目..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="text-center max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-4">加载失败</h2>
          <p className="text-neutral-light/80 mb-6">{error}</p>
          <Button onClick={() => window.location.reload()}>
            重新加载
          </Button>
        </Card>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="准备测评..." />
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* 进度条 */}
        <div className="mb-8">
          <ProgressBar progress={progress} />
          <div className="flex justify-between items-center mt-2 text-sm text-neutral-light/60">
            <span>第 {currentQuestionIndex + 1} 题，共 {questions.length} 题</span>
            <span>{Math.round(progress)}% 完成</span>
          </div>
        </div>

        {/* 题目卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mb-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-purple bg-primary-purple/20 px-3 py-1 rounded-full">
                    {currentQuestion.category.replace('_', ' ')}
                  </span>
                  <span className="text-sm text-neutral-light/60">
                    {currentQuestion.scenarioType}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-light leading-relaxed">
                  {currentQuestion.content}
                </h2>
              </div>

              {/* 李克特量表选项 */}
              <div className="space-y-3">
                {likertOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerSelect(option.value)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      currentAnswer?.score === option.value
                        ? 'border-primary-purple bg-primary-purple/20 text-white'
                        : 'border-neutral-medium hover:border-primary-purple/50 text-neutral-light hover:bg-neutral-medium/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${option.color}`} />
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* 导航按钮 */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>上一题</span>
          </Button>

          <div className="flex space-x-4">
            {isComplete ? (
              <Button
                onClick={handleSubmit}
                isLoading={isSubmitting}
                className="flex items-center space-x-2"
              >
                <span>提交测评</span>
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!canGoNext || !canProceed}
                className="flex items-center space-x-2"
              >
                <span>下一题</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* 提示信息 */}
        {!canProceed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center"
          >
            <p className="text-sm text-neutral-light/60">
              请选择一个选项后继续
            </p>
          </motion.div>
        )}
        
        {/* 调试信息 */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-2 bg-gray-800 text-xs text-gray-300 rounded">
            <div>当前题目索引: {currentQuestionIndex}</div>
            <div>总题目数: {questions.length}</div>
            <div>已回答: {answers.length}</div>
            <div>当前答案: {currentAnswer?.score || '未选择'}</div>
            <div>可以下一题: {canGoNext ? '是' : '否'}</div>
            <div>可以继续: {canProceed ? '是' : '否'}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AssessmentPage