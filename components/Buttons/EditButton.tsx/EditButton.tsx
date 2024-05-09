import { db } from '@/firebase/firebaseConfig'
import modStyles from '../modifierButtons.module.css'
import { doc, setDoc } from 'firebase/firestore'

type Props = { id: string }
const EditButton = ({ id }: Props) => {
  const editTask = async () => {
    // try {
    //   await setDoc(doc(db, 'tasks', id), {task })
    //   console.log('Task updated successfully')
    // } catch (error) {
    //   console.log('Task NOT edited')
    // }
  }
  return (
    <button onClick={editTask} className={modStyles.buttons}>
      Edit
    </button>
  )
}
export default EditButton
