import express from 'express'
import { personalityTypes, getPersonalityTypeById } from '../models/PersonalityType'

const router = express.Router()

/**
 * 获取所有人格类型
 * GET /api/personality-types
 */
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: personalityTypes,
      total: personalityTypes.length
    })
  } catch (error) {
    console.error('获取人格类型失败:', error)
    res.status(500).json({
      error: 'INTERNAL_ERROR',
      message: '获取人格类型失败'
    })
  }
})

/**
 * 获取人格类型的简要信息（用于卡片展示）
 * GET /api/personality-types/summary
 */
router.get('/summary', (req, res) => {
  try {
    const summary = personalityTypes.map(type => ({
      id: type.id,
      name: type.name,
      nickname: type.nickname,
      description: type.description.substring(0, 100) + '...',
      avatarUrl: type.avatarUrl,
      colorScheme: type.colorScheme
    }))

    res.json({
      success: true,
      data: summary,
      total: summary.length
    })
  } catch (error) {
    console.error('获取人格类型摘要失败:', error)
    res.status(500).json({
      error: 'INTERNAL_ERROR',
      message: '获取人格类型摘要失败'
    })
  }
})

/**
 * 根据ID获取特定人格类型
 * GET /api/personality-types/:id
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params
    const personalityType = getPersonalityTypeById(id)

    if (!personalityType) {
      return res.status(404).json({
        error: 'NOT_FOUND',
        message: '人格类型不存在'
      })
    }

    res.json({
      success: true,
      data: personalityType
    })
  } catch (error) {
    console.error('获取人格类型失败:', error)
    res.status(500).json({
      error: 'INTERNAL_ERROR',
      message: '获取人格类型失败'
    })
  }
})

export default router