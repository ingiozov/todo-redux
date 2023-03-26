import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import AddTodoForm from './AddTodoForm/AddTodoForm'
import TodoList from './TodoList/TodoList'
import styles from './Dashboard.module.css'
import { useEffect } from 'react'

function Dashboard() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.name)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  return (
    user && (
      <div className={styles.dashboard}>
        <Header />
        <AddTodoForm />
        <TodoList />
      </div>
    )
  )
}

export default Dashboard
