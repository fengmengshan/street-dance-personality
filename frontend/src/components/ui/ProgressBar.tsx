import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number // 0-100
  className?: string
  showPercentage?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '',
  showPercentage = true 
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-neutral-light">进度</span>
        {showPercentage && (
          <span className="text-sm font-medium text-secondary-green">
            {Math.round(progress)}%
          </span>
        )}
      </div>
      
      <div className="w-full bg-neutral-medium rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-purple to-secondary-emerald rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default ProgressBar