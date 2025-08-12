import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

import questionsRouter from './routes/questions'
import assessmentsRouter from './routes/assessments'
import personalityTypesRouter from './routes/personalityTypes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

// 安全中间件
app.use(helmet())

// CORS配置
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

// 请求频率限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100, // 限制每个IP 15分钟内最多100个请求
  message: {
    error: 'RATE_LIMIT_EXCEEDED',
    message: '请求过于频繁，请稍后再试'
  }
})
app.use('/api', limiter)

// 解析JSON
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  })
})

// API路由
app.use('/api/questions', questionsRouter)
app.use('/api/assessments', assessmentsRouter)
app.use('/api/personality-types', personalityTypesRouter)

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'NOT_FOUND',
    message: '请求的资源不存在'
  })
})

// 全局错误处理
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server Error:', error)

  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'VALIDATION_ERROR',
      message: '输入数据格式不正确',
      details: error.message
    })
  }

  if (error.code === 'P2002') { // Prisma unique constraint error
    return res.status(409).json({
      error: 'CONFLICT',
      message: '数据已存在'
    })
  }

  res.status(500).json({
    error: 'INTERNAL_ERROR',
    message: '服务器内部错误'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 街舞人格测评系统后端服务启动成功`)
  console.log(`📍 服务地址: http://localhost:${PORT}`)
  console.log(`🌍 环境: ${process.env.NODE_ENV || 'development'}`)
})