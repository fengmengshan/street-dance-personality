import { PrismaClient } from '@prisma/client'
import { questions } from '../data/questions'

const prisma = new PrismaClient()

async function main() {
  console.log('开始种子数据填充...')

  // 清空现有数据
  await prisma.answer.deleteMany()
  await prisma.assessment.deleteMany()
  await prisma.question.deleteMany()
  await prisma.user.deleteMany()

  console.log('已清空现有数据')

  // 插入题目数据
  for (const question of questions) {
    await prisma.question.create({
      data: {
        ...question,
        category: question.category.toString(),
        dimension: question.dimension.toString(),
        danceStyles: JSON.stringify(question.danceStyles),
        scenarioType: question.scenarioType.toString()
      }
    })
  }

  console.log(`已插入 ${questions.length} 道题目`)

  // 创建测试用户
  const testUser = await prisma.user.create({
    data: {
      username: 'test_dancer',
      email: 'test@streetdance.com'
    }
  })

  console.log('已创建测试用户:', testUser.username)

  console.log('种子数据填充完成!')
}

main()
  .catch((e) => {
    console.error('种子数据填充失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })