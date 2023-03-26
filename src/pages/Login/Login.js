import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  )
}

export default Login
