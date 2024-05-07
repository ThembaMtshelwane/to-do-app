'use client'

import styles from '../modal.module.css'
import { RxCross1 } from 'react-icons/rx'

type Props = {
  show: boolean
  setShowLoginModal: (value: boolean) => void
}
const LoginModal = ({ show, setShowLoginModal }: Props) => {
  const loginUser = () => {
    console.log('Login user and authenticate')
  }
  const switchToRegister = () => {
    console.log('Switch to Sign Up modal')
  }
  return show ? (
    <section className={styles.modalContainer}>
      <section className={styles.modalContent}>
        <section className={styles.modalHeader}>
          <h1>Login</h1>
          <section
            className={styles.close}
            onClick={() => setShowLoginModal(false)}
          >
            <RxCross1 />
          </section>
        </section>

        <form action="" className={styles.modalBody}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className={styles.inputs}
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
          />

          <section className={styles.buttonContainer}>
            <button className={styles.button} onClick={loginUser}>
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
