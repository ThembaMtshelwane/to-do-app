'use client'

import Link from 'next/link'
import AuthButtons from '../Buttons/AuthButtons/AuthButtons'
import LogOutButton from '../Buttons/LogOutButton/LogOutButton'
import styles from './navbar.module.css'
import LoginModal from '../Modals/LoginModal/LoginModal'
import { useState } from 'react'
import SignUpModal from '../Modals/SignUpModal/SignUpModal'

type Props = {}

const Navbar = (props: Props) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  const openSignUpModal = () => {
    setShowSignUpModal(true)
    setShowLoginModal(false)
  }
  const openLoginModal = () => {
    setShowLoginModal(true)
    setShowSignUpModal(false)
  }

  return (
    <section>
      <nav className={styles.navbar}>
        <Link href="/dashboard" className={styles.leftSection}>
          <img className={styles.logoContainer} src="" alt="" />
        </Link>
        <section className={styles.rightSection}>
          {1 ? (
            <section className={styles.authButtons}>
              <AuthButtons buttonName="Login" openModal={openLoginModal} />
              <AuthButtons buttonName="Register" openModal={openSignUpModal} />
            </section>
          ) : (
            <LogOutButton />
          )}
        </section>
      </nav>
      <LoginModal show={showLoginModal} setShowLoginModal={setShowLoginModal} />
      <SignUpModal
        show={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    </section>
  )
}
export default Navbar
