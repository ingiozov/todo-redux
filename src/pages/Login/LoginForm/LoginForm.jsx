import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../redux/userSlice'
import styles from './LoginForm.module.css'

function LoginForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ value }))
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div>
        <h2>Вход</h2>
      </div>
      <label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введите имя"
        />
      </label>
      <div>
        <button type="submit">войти</button>
      </div>
    </form>
  )
}

export default LoginForm
