'use client'

import { RxCross1 } from 'react-icons/rx'
import styles from '../modal.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { passwordValidate } from '@/utils/passwordValidation'
import { auth } from '@/firebase/firebaseConfig'
import { useRouter } from 'next/navigation'

type Props = {
  show: boolean
  setShowSignUpModal: (value: boolean) => void
}
const SignUpModal = ({ show, setShowSignUpModal }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const signUpUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setPassword('')
      setConfirmPassword('')
      return
    }

    const errorMessage = passwordValidate(password)
    if (errorMessage) {
      setError(errorMessage)
      setPassword('')
      setConfirmPassword('')
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      console.log('Signed up successfully:', user)
      router.push('/dashboard')
      reset()
    } catch (error) {
      setError('An error occurred')
    }
  }

  const switchToLogin = () => {
    console.log('Switch to Login modal')
  }

  const reset = () => {
    setShowSignUpModal(false)
    setPassword('')
    setConfirmPassword('')
    setEmail('')
    setError('')
  }

  return show ? (
    <section className={styles.modalContainer}>
      <section className={styles.modalContent}>
        <section className={styles.modalHeader}>
          <h1>Sign Up</h1>
          <section className={styles.close} onClick={reset}>
            <RxCross1 />
          </section>
        </section>

        <form onSubmit={signUpUser} className={styles.modalBody}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            className={styles.inputs}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className={styles.labels}>
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className={styles.inputs}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword" className={styles.labels}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            className={styles.inputs}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <section className={styles.errorContainer}>{error}</section>

          <section className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
            {/* <p onClick={switchToLogin}>Go to Login</p> */}
          </section>
        </form>
      </section>
    </section>
  ) : (
    ''
  )
}
export default SignUpModal
