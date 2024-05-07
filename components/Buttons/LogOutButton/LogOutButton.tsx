import { auth } from '@/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import styles from '../AuthButtons/authbuttons.module.css'
import { useRouter } from 'next/navigation'

type Props = {}
const LogOutButton = (props: Props) => {
  const router = useRouter()
  const logOut = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Sign-out error:', error)
    }
  }
  return (
    <button className={styles.button} onClick={logOut}>
      LogOut
    </button>
  )
}
export default LogOutButton
