'use client'

import styles from './authbuttons.module.css'

type Props = {
  buttonName: string
  openModal: () => void
}
const AuthButtons = ({ buttonName, openModal }: Props) => {
  return (
    <button className={styles.button} onClick={openModal}>
      {buttonName}
    </button>
  )
}
export default AuthButtons
