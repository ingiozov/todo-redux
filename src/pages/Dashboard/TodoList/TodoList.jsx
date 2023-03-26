import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList() {
  const [sort, setSort] = useState('active')
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      <div className={styles.displayButtons}>
        <button
          className={sort === 'active' ? styles.active : ''}
          onClick={() => setSort('active')}
        >
          Активные
        </button>
        <button
          className={sort === 'completed' ? styles.active : ''}
          onClick={() => setSort('completed')}
        >
          Неактивные
        </button>
        <button
          className={sort === 'all' ? styles.active : ''}
          onClick={() => setSort('all')}
        >
          Все
        </button>
      </div>
      <ul className={styles.TodoList}>
        {todos.length > 0 && sort === 'active'
          ? todos.map(
              (todo) =>
                !todo.completed && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                )
            )
          : todos.length > 0 && sort === 'completed'
          ? todos.map(
              (todo) =>
                todo.completed && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                )
            )
          : todos.length > 0 && sort === 'all'
          ? todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))
          : null}
      </ul>
    </div>
  )
}

export default TodoList
