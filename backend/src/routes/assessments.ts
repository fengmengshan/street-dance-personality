import express from 'express'
import { z } from 'zod'
import prisma from '../lib/database'
import { PersonalityAnalyzer } from '../services/PersonalityAnalyzer'

const router = express.Router()
const analyzer = new PersonalityAnalyzer()

// 验证提交答案的数据结构
const submitAssessmentSchema = z.object({
  answers: z.array(z.object({
    questionId: z.string(),
    score: z.number().min(1).max(5)
  })).min(1),
  userId: z.string().optional()
})

/**
 * 提交测评答案并获取结果
 * POST /api/assessments/submit
 */
router.post('/submit', async (req, res) => {
  try {
    // 验证请求数据
    const validatedData = submitAssessmentSchema.parse(req.body)
    const { answers, userId } = validatedData

    // 获取所有题目信息
    const questionsFromDb = await prisma.question.findMany()
    
    // 转换数据格式以适应分析器
    const questions = questionsFromDb.map(q => ({
      ...q,
      category: q.category as any,
      dimension: q.dimension as any,
      danceStyles: JSON.parse(q.danceStyles),
      scenarioType: q.scenarioType as any
    }))
    
    // 计算维度得分
    const dimensionScores = analyzer.calculateDimensionScores(answers, questions)
    
    // 生成人格画像
    const personalityProfile = analyzer.generatePersonalityProfile(dimensionScores)

    // 保存测评记录
    const assessment = await prisma.assessment.create({
      data: {
        userId: userId || null,
        personalityType: personalityProfile.personalityType.id,
        dimensionScores: JSON.stringify(dimensionScores),
        answers: {
          create: answers.map(answer => ({
            questionId: answer.questionId,
            score: answer.score
          }))
        }
      },
      include: {
        answers: true
      }
    })

    res.json({
      success: true,
      data: {
        assessmentId: assessment.id,
        personalityProfile,
        completedAt: assessment.completedAt
      }
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'VALIDATION_ERROR',
        message: '提交数据格式不正确',
        details: error.errors
      })
    }

    console.error('提交测评失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '提交测评失败'
    })
  }
})

/**
 * 获取测评结果
 * GET /api/assessments/:id
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const assessment = await prisma.assessment.findUnique({
      where: { id },
      include: {
        answers: {
          include: {
            question: true
          }
        }
      }
    })

    if (!assessment) {
      return res.status(404).json({
        error: 'NOT_FOUND',
        message: '测评记录不存在'
      })
    }

    // 重新生成人格画像（以防数据结构更新）
    const questions = assessment.answers.map(a => ({
      ...a.question,
      category: a.question.category as any,
      dimension: a.question.dimension as any,
      danceStyles: JSON.parse(a.question.danceStyles),
      scenarioType: a.question.scenarioType as any
    }))
    const answers = assessment.answers.map(a => ({
      questionId: a.questionId,
      score: a.score
    }))

    const dimensionScores = JSON.parse(assessment.dimensionScores)
    const personalityProfile = analyzer.generatePersonalityProfile(dimensionScores)

    res.json({
      success: true,
      data: {
        assessmentId: assessment.id,
        personalityProfile,
        completedAt: assessment.completedAt,
        isShared: assessment.isShared
      }
    })

  } catch (error) {
    console.error('获取测评结果失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '获取测评结果失败'
    })
  }
})

/**
 * 分享测评结果
 * POST /api/assessments/:id/share
 */
router.post('/:id/share', async (req, res) => {
  try {
    const { id } = req.params

    const assessment = await prisma.assessment.update({
      where: { id },
      data: { isShared: true }
    })

    res.json({
      success: true,
      data: {
        assessmentId: assessment.id,
        isShared: assessment.isShared,
        shareUrl: `${process.env.FRONTEND_URL}/share/${assessment.id}`
      }
    })

  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({
        error: 'NOT_FOUND',
        message: '测评记录不存在'
      })
    }

    console.error('分享测评失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '分享测评失败'
    })
  }
})

/**
 * 获取用户的测评历史
 * GET /api/assessments/user/:userId
 */
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const assessments = await prisma.assessment.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        personalityType: true,
        completedAt: true,
        isShared: true
      }
    })

    const total = await prisma.assessment.count({
      where: { userId }
    })

    res.json({
      success: true,
      data: assessments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })

  } catch (error) {
    console.error('获取用户测评历史失败:', error)
    res.status(500).json({
      error: 'DATABASE_ERROR',
      message: '获取测评历史失败'
    })
  }
})

export default router