import { db } from '@/firebase/firebaseConfig'
import modStyles from '../modifierButtons.module.css'
import { doc, deleteDoc } from 'firebase/firestore'

type Props = { id: string }
const DeleteButton = ({ id }: Props) => {
  const deleteTask = async () => {
    try {
      await deleteDoc(doc(db, 'tasks', id))
      console.log('Task deleted successfully')
    } catch (error) {
      console.log('Task NOT deleted')
    }
  }

  return (
    <button onClick={deleteTask} className={modStyles.buttons}>
      Delete
    </button>
  )
}
export default DeleteButton
