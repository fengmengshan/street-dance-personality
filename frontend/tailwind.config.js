/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8B5CF6',
          indigo: '#6366F1',
          blue: '#3B82F6',
        },
        secondary: {
          pink: '#EC4899',
          cyan: '#06B6D4',
          emerald: '#10B981',
        },
        accent: {
          orange: '#F59E0B',
          rose: '#F43F5E',
          violet: '#8B5CF6',
        },
        neutral: {
          dark: '#0F172A',
          medium: '#1E293B',
          light: '#F8FAFC',
          gray: '#64748B',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-neon': 'pulse 1.5s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}