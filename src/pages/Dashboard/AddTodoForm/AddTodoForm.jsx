import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/todoSlice'
import styles from './AddTodoForm.module.css'
import { TiPen } from 'react-icons/ti'

function AddTodoForm() {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        title: value,
      })
    )
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <label>
        <TiPen />
        <input
          type="text"
          placeholder="Добавьте новую задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </label>
    </form>
  )
}

export default AddTodoForm
