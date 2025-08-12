import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { motion } from 'framer-motion'
import { Music, Users, Home, Sparkles } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/assessment', icon: Sparkles, label: '开始测评' },
    { path: '/personality-types', icon: Users, label: '人格类型' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="bg-neutral-dark/90 backdrop-blur-sm border-b border-primary-purple/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-primary-purple dance-bounce" />
              <span className="text-xl font-display font-bold text-neon">
                街舞人格测评
              </span>
            </Link>

            {/* 导航菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-primary-purple bg-primary-purple/20 border border-primary-purple/30'
                        : 'text-neutral-light hover:text-primary-purple hover:bg-neutral-medium/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button className="text-neutral-light hover:text-secondary-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="bg-neutral-dark border-t border-primary-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-neutral-light/60 mb-2">
              © 2024 街舞人格测评系统 - 发现你的舞蹈灵魂
            </p>
            <p className="text-sm text-neutral-light/40">
              基于心理学理论与街舞文化的科学测评平台
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout