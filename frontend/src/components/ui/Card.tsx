import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  onClick 
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      className={clsx(
        'card-street p-6',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card