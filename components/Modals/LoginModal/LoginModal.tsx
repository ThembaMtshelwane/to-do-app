'use client'

import { useState } from 'react'
import styles from '../modal.module.css'
import { RxCross1 } from 'react-icons/rx'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import { useRouter } from 'next/navigation'

type Props = {
  show: boolean
  setShowLoginModal: (value: boolean) => void
}
const LoginModal = ({ show, setShowLoginModal }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const [error, setError] = useState<string>('')
  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      router.push('/dashboard')
      reset()
    } catch (error) {
      console.log('error', error)

      setError('Incorrect email or incorrect password')
    }
  }
  const switchToRegister = () => {
    console.log('Switch to Sign Up modal')
  }

  const reset = () => {
    setShowLoginModal(false)
    setPassword('')
    setEmail('')
    setError('')
  }

  return show ? (
    <section className={styles.modalContainer}>
      <section className={styles.modalContent}>
        <section className={styles.modalHeader}>
          <h1>Login</h1>
          <section className={styles.close} onClick={reset}>
            <RxCross1 />
          </section>
        </section>

        <form onSubmit={loginUser} className={styles.modalBody}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={styles.inputs}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className={styles.labels}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className={styles.inputs}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <section className={styles.errorContainer}>{error}</section>

          <section className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Login
            </button>
            {/* <p onClick={switchToRegister}>Register an account</p> */}
          </section>
        </form>
      </section>
    </section>
  ) : (
    ''
  )
}
export default LoginModal
