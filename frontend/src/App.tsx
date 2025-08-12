import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import AssessmentPageSimple from './pages/AssessmentPageSimple'
import ResultPage from './pages/ResultPage'
import SharePage from './pages/SharePage'
import PersonalityTypesPage from './pages/PersonalityTypesPage'
import Layout from './components/Layout'

function App() {
  return (
    <div className="min-h-screen bg-street-gradient">
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPageSimple />} />
            <Route path="/result/:id" element={<ResultPage />} />
            <Route path="/share/:id" element={<SharePage />} />
            <Route path="/personality-types" element={<PersonalityTypesPage />} />
          </Routes>
        </motion.div>
      </Layout>
    </div>
  )
}

export default App