'use client'

import Link from 'next/link'
import AuthButtons from '../Buttons/AuthButtons/AuthButtons'
import LogOutButton from '../Buttons/LogOutButton/LogOutButton'
import styles from './navbar.module.css'

type Props = {}
const Navbar = (props: Props) => {
  const openLoginModal = () => {
    console.log('Login')
  }
  const openSignUpModal = () => {
    console.log('Register')
  }
  return (
    <nav className={styles.navbar}>
      <Link href='/dashboard' className={styles.leftSection}>
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
  )
}
export default Navbar
