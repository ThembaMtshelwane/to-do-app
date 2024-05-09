'use client'

import { RxCross1 } from 'react-icons/rx'
import styles from '../modal.module.css'
import { useState } from 'react'
import { db } from '@/firebase/firebaseConfig'
import { setDoc, doc } from 'firebase/firestore'
import error from 'next/error'

type Props = {
  id: string
  show: boolean
  setShowEditModal: (value: boolean) => void
}
const EditModal = ({ id, show, setShowEditModal }: Props) => {
  const [updatedTask, setUpdatedTask] = useState<string>('')
  const editTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await setDoc(doc(db, 'tasks', id), { task: updatedTask })
      console.log('Task updated successfully')
    } catch (error) {
      console.log('Task NOT edited')
    }
    setShowEditModal(false)
  }
  return (
    <section>
      {show ? (
        <section className={styles.modalContainer}>
          <section className={styles.modalContent}>
            <section className={styles.modalHeader}>
              <h1>Edit Task</h1>
              <section
                className={styles.close}
                onClick={() => setShowEditModal(false)}
              >
                <RxCross1 />
              </section>
            </section>

            <form onSubmit={editTask} className={styles.modalBody}>
              <label htmlFor="task" className={styles.labels}>
                Task
              </label>
              <input
                type="text"
                name="task"
                required
                value={updatedTask}
                className={styles.inputs}
                onChange={(e) => setUpdatedTask(e.target.value)}
              />

              <section className={styles.buttonContainer}>
                <button type="submit" className={styles.button}>
                  Done
                </button>
              </section>
            </form>
          </section>
        </section>
      ) : (
        ''
      )}
    </section>
  )
}
export default EditModal
