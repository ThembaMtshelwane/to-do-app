'use client'

import { RxCross1 } from 'react-icons/rx'
import styles from '../modal.module.css'

type Props = {
  show: boolean
  setShowSignUpModal: (value: boolean) => void
}
const SignUpModal = ({ show, setShowSignUpModal }: Props) => {
  const signUpUser = () => {
    console.log('Sign up a user')
  }
  const switchToLogin = () => {
    console.log('Switch to Login modal')
  }
  return show ? (
    <section className={styles.modalContainer}>
      <section className={styles.modalContent}>
        <section className={styles.modalHeader}>
          <h1>Sign Up</h1>
          <section
            className={styles.close}
            onClick={() => setShowSignUpModal(false)}
          >
            <RxCross1 />
          </section>
        </section>

        <form action="" className={styles.modalBody}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input type="email" name="email" required className={styles.inputs} />

          <label htmlFor="password" className={styles.labels}>
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className={styles.inputs}
          />

          <label htmlFor="confirmPassword" className={styles.labels}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            className={styles.inputs}
          />

          <section className={styles.buttonContainer}>
            <button className={styles.button} onClick={signUpUser}>
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
