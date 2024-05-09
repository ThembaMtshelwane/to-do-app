'use client'

import { db } from '@/firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import styles from './displaytask.module.css'
import EditButton from '@/components/Buttons/EditButton.tsx/EditButton'
import DeleteButton from '@/components/Buttons/DeleteButton/DeleteButton'

type Props = {}
const DisplayTask = (props: Props) => {
  const [tasks, setTasks] = useState<string[]>()
  useEffect(() => {
    const fetchData = async () => {
      const storeData: string[] = []
      const querySnapshot = await getDocs(collection(db, 'tasks'))
      querySnapshot.forEach((doc) => {
        storeData.push(doc.data().task)
      })
      setTasks(storeData)
    }
    fetchData()
  }, [])
  console.log('tasks', tasks)

  return (
    <ul>
      {tasks
        ? tasks.map((element, index) => (
            <li key={index} className={styles.taskContainer}>
              <section className={styles.leftSection}>{element}</section>
              <section className={styles.rightSection}>
                <EditButton />
                <DeleteButton />
              </section>
            </li>
          ))
        : ''}
    </ul>
  )
}
export default DisplayTask
