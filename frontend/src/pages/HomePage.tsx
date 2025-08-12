import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Users, TrendingUp, Heart } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: '科学测评',
      description: '基于大五人格理论与街舞文化特征的专业测评系统'
    },
    {
      icon: Users,
      title: '12种人格',
      description: '独特的街舞人格类型，如暗号玩家、即兴诗人等创意命名'
    },
    {
      icon: TrendingUp,
      title: '个性化建议',
      description: '根据你的人格特征推荐适合的舞种和发展方向'
    },
    {
      icon: Heart,
      title: '社区分享',
      description: '与街舞社区分享你的人格画像，找到志同道合的舞伴'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-neon mb-6">
              发现你的街舞灵魂
            </h1>
            <p className="text-xl md:text-2xl text-neutral-light mb-8 max-w-3xl mx-auto">
              通过科学的心理测评，探索你独特的街舞人格类型，
              找到最适合你的舞蹈风格和发展路径
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button size="lg" className="w-full sm:w-auto">
                  开始测评
                </Button>
              </Link>
              <Link to="/personality-types">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  了解人格类型
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-purple/20 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-pink/20 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary-cyan/10 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-light mb-4">
              为什么选择我们的测评？
            </h2>
            <p className="text-lg text-neutral-light/80 max-w-2xl mx-auto">
              我们结合了现代心理学理论与街舞文化的深度理解，
              为你提供最专业、最有趣的人格测评体验
            </p>
          </motion.div>

          <div className="grid-responsive">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-purple to-secondary-pink rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-light mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-light/80">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-purple/10 to-secondary-pink/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-light mb-6">
              准备好探索你的街舞人格了吗？
            </h2>
            <p className="text-lg text-neutral-light/80 mb-8">
              只需要几分钟时间，回答62道精心设计的问题，
              就能获得专属于你的街舞人格画像
            </p>
            <Link to="/assessment">
              <Button size="lg" className="dance-bounce">
                立即开始测评
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage