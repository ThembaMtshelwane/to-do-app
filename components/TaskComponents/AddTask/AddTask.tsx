'use client'

import AddButton from '@/components/Buttons/AddButton/AddButton'
import { useState } from 'react'
import styles from './addtask.module.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/firebaseConfig'

type Props = {}
const AddTask = (props: Props) => {
  const [task, setTask] = useState('')
  const [loading, isLoading] = useState(false)

  const addTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    isLoading(true)
    try {
      const docRef = await addDoc(collection(db, 'tasks'), { task })
      console.log('Tasks uploaded')
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setTask('')
    isLoading(false)
  }

  return (
    <form onSubmit={addTask} className={styles.addContainer}>
      <section className={styles.data}>
        <label htmlFor="task" className={styles.labels}>
          Add Task
        </label>
        <input
          type="text"
          value={task}
          name="task"
          id="task"
          required
          className={styles.inputs}
          onChange={(e) => setTask(e.target.value)}
        />
      </section>

      <section className={styles.buttonContainer}>
        <AddButton />
      </section>
    </form>
  )
}
export default AddTask
