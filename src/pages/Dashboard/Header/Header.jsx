import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'

function Header() {
  const activeTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  )
  const user = useSelector((state) => state.user.name)

  return (
    <header className={styles.header}>
      <h1>{`Привет ${user}!`}</h1>
      <p>{`У вас ${activeTodos.length} активных задач`}</p>
    </header>
  )
}

export default Header
