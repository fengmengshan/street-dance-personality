import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { personalityTypesApi } from '../services/api'
import { PersonalityType } from '../types'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const PersonalityTypesPage: React.FC = () => {
  const [personalityTypes, setPersonalityTypes] = useState<PersonalityType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<PersonalityType | null>(null)

  useEffect(() => {
    const loadPersonalityTypes = async () => {
      try {
        setIsLoading(true)
        const response = await personalityTypesApi.getAll()
        setPersonalityTypes(response.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载人格类型失败')
      } finally {
        setIsLoading(false)
      }
    }

    loadPersonalityTypes()
  }, [])

  const filteredTypes = personalityTypes.filter(type =>
    type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" text="正在加载人格类型..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="text-center max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-4">加载失败</h2>
          <p className="text-neutral-light/80 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-graffiti"
          >
            <span>重新加载</span>
          </button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-light mb-4">
            12种街舞人格类型
          </h1>
          <p className="text-lg text-neutral-light/80 max-w-3xl mx-auto">
            每种人格类型都代表着独特的街舞风格和特征。
            找到你的类型，发现你在街舞世界中的独特位置。
          </p>
        </motion.div>

        {/* 搜索栏 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-light/60 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索人格类型..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-graffiti pl-10"
            />
          </div>
        </motion.div>

        {/* 人格类型网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full cursor-pointer"
                onClick={() => setSelectedType(type)}
              >
                <div className="text-center">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: type.colorScheme.primary + '20' }}
                  >
                    🎭
                  </div>
                  <h3 className="text-lg font-bold text-neutral-light mb-2">
                    {type.name}
                  </h3>
                  <p className="text-sm text-primary-orange font-medium mb-3">
                    {type.nickname}
                  </p>
                  <p className="text-sm text-neutral-light/80 leading-relaxed mb-4">
                    {type.description.substring(0, 100)}...
                  </p>
                  
                  {/* 推荐舞种标签 */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {type.recommendedStyles.slice(0, 3).map((style, styleIndex) => (
                      <span
                        key={styleIndex}
                        className="px-2 py-1 bg-secondary-green/20 text-secondary-green rounded-full text-xs"
                      >
                        {style}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 详细信息模态框 */}
        {selectedType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedType(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-medium rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div 
                  className="w-20 h-20 mx-auto rounded-full mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: selectedType.colorScheme.primary + '20' }}
                >
                  🎭
                </div>
                <h2 className="text-2xl font-bold text-neutral-light mb-2">
                  {selectedType.name}
                </h2>
                <p className="text-lg text-primary-orange font-medium mb-4">
                  {selectedType.nickname}
                </p>
                <p className="text-neutral-light/80 leading-relaxed">
                  {selectedType.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-light mb-3">性格特点</h3>
                  <ul className="space-y-2">
                    {selectedType.characteristics.map((char, index) => (
                      <li key={index} className="text-sm text-neutral-light/80 flex items-start">
                        <span className="text-primary-orange mr-2">•</span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-light mb-3">核心优势</h3>
                  <ul className="space-y-2">
                    {selectedType.strengths.map((strength, index) => (
                      <li key={index} className="text-sm text-neutral-light/80 flex items-start">
                        <span className="text-secondary-green mr-2">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-neutral-light mb-3">推荐舞种</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedType.recommendedStyles.map((style, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-orange/20 text-primary-orange rounded-full text-sm"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-neutral-light mb-3">发展建议</h3>
                <ul className="space-y-2">
                  {selectedType.developmentSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-neutral-light/80 flex items-start">
                      <span className="text-secondary-green mr-2">→</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedType(null)}
                  className="btn-graffiti"
                >
                  <span>关闭</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 空状态 */}
        {filteredTypes.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-neutral-light/60">
              没有找到匹配的人格类型，请尝试其他关键词
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonalityTypesPage