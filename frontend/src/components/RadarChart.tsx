import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { DimensionScores } from '../types'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface RadarChartProps {
  scores: DimensionScores
  className?: string
}

const RadarChart: React.FC<RadarChartProps> = ({ scores, className = '' }) => {
  const data = {
    labels: [
      '开放性',
      '尽责性', 
      '外向性',
      '宜人性',
      '神经质'
    ],
    datasets: [
      {
        label: '人格维度得分',
        data: [
          scores.openness,
          scores.conscientiousness,
          scores.extraversion,
          scores.agreeableness,
          scores.neuroticism
        ],
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderColor: '#8B5CF6',
        borderWidth: 3,
        pointBackgroundColor: '#8B5CF6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#404040',
        titleColor: '#F5F5F5',
        bodyColor: '#F5F5F5',
        borderColor: '#8B5CF6',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `${context.label}: ${context.parsed.r}分`
          }
        }
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          color: '#F5F5F5',
          backdropColor: 'transparent',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#404040',
          lineWidth: 1,
        },
        angleLines: {
          color: '#404040',
          lineWidth: 1,
        },
        pointLabels: {
          color: '#F5F5F5',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  }

  return (
    <div className={`relative ${className}`}>
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart