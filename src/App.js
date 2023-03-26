import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
