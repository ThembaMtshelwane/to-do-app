'use client'

import Link from 'next/link'
import AuthButtons from '../Buttons/AuthButtons/AuthButtons'
import LogOutButton from '../Buttons/LogOutButton/LogOutButton'
import styles from './navbar.module.css'
import LoginModal from '../Modals/LoginModal/LoginModal'
import { Suspense, useEffect, useState } from 'react'
import SignUpModal from '../Modals/SignUpModal/SignUpModal'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const Navbar = (props: Props) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false)
  const [user, loading, error] = useAuthState(auth)
  // const [storedUser, setStoredUser] = useState<any>(null)

  // useEffect(() => {
  //   if (storedUser) {
  //     return
  //   } else {
  //     if (user) {
  //       //Logged in => store user locally
  //       localStorage.setItem('user', JSON.stringify(user))
  //       setStoredUser(user)
  //     } else {
  //       //Logged Out => remove user locally
  //       localStorage.removeItem('user')
  //       setStoredUser(null)
  //     }
  //   }
  // }, [user])

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
        {/* <p> {user?.email}</p> */}
        <section className={styles.rightSection}>
          {loading ? (
            <p>Loading user...</p>
          ) : (
            <Suspense fallback="loading user">
              <>
                {user ? (
                  <LogOutButton />
                ) : (
                  <section className={styles.authButtons}>
                    <AuthButtons
                      buttonName="Login"
                      openModal={openLoginModal}
                    />
                    <AuthButtons
                      buttonName="Register"
                      openModal={openSignUpModal}
                    />
                  </section>
                )}
              </>
            </Suspense>
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
