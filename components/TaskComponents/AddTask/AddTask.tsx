'use client'

import AddButton from '@/components/Buttons/AddButton/AddButton'
import { useState } from 'react'
import styles from './addtask.module.css'

type Props = {}
const AddTask = (props: Props) => {
  const [task, setTask] = useState('')
  const addTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTask('')
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
