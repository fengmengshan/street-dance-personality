import express from 'express'
import prisma from '../lib/database'

const router = express.Router()

/**
 * 获取所有题目
 * GET /api/questions
 */
router.get('/', async (req, res) => {
  try {
    const questions = await prisma.question.findMany({
      orderBy: {
        orderIndex: 'asc'
      }
    })

    res.json({
      success: true,
      data: questions,
      total: questions.length
    })
  } catch (error) {
    console.error('获取题目失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '获取题目失败'
    })
  }
})

/**
 * 获取随机题目（用于测评）
 * GET /api/questions/random?count=62
 */
router.get('/random', async (req, res) => {
  try {
    const count = parseInt(req.query.count as string) || 62
    
    const questions = await prisma.question.findMany({
      orderBy: {
        orderIndex: 'asc'
      }
    })

    // 如果请求的数量大于总题目数，返回所有题目
    const selectedQuestions = questions.slice(0, Math.min(count, questions.length))

    res.json({
      success: true,
      data: selectedQuestions,
      total: selectedQuestions.length
    })
  } catch (error) {
    console.error('获取随机题目失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '获取题目失败'
    })
  }
})

/**
 * 根据ID获取特定题目
 * GET /api/questions/:id
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const question = await prisma.question.findUnique({
      where: { id }
    })

    if (!question) {
      return res.status(404).json({
        error: 'NOT_FOUND',
        message: '题目不存在'
      })
    }

    res.json({
      success: true,
      data: question
    })
  } catch (error) {
    console.error('获取题目失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '获取题目失败'
    })
  }
})

export default router