import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleComplete, deleteTodo, editTodo } from '../../../redux/todoSlice'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import styles from './TodoItem.module.css'

function TodoItem({ id, title, completed }) {
  const [editing, setEditing] = useState(false)
  const prevValue = useSelector((state) => {
    const todoIndex = state.todos.findIndex((todo) => todo.id === id)
    return state.todos[todoIndex].title
  })
  const [editValue, setEditValue] = useState(prevValue)
  const dispatch = useDispatch()

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }))
  }
  const handleDelete = () => {
    dispatch(deleteTodo({ id }))
  }
  const handleEdit = () => {
    dispatch(editTodo({ id: id, title: editValue }))
    setEditing(false)
  }

  return (
    <li className={styles.TodoItem}>
      <div className={styles.title} onClick={handleComplete}>
        {completed && !editing && <s>{title}</s>}
        {!completed && !editing && <p>{title}</p>}
      </div>
      {!editing && (
        <div className={styles.buttons}>
          <button type="button" onClick={handleDelete}>
            <FaTrashAlt />
          </button>
          <button type="button" onClick={() => setEditing(true)}>
            <FaEdit />
          </button>
        </div>
      )}
      {editing && (
        <div className={styles.editBlock}>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button type="button" onClick={handleEdit}>
            Сохранить
          </button>
        </div>
      )}
    </li>
  )
}

export default TodoItem
