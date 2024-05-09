'use client'

import { db } from '@/firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import styles from './displaytask.module.css'
import EditButton from '@/components/Buttons/EditButton.tsx/EditButton'
import DeleteButton from '@/components/Buttons/DeleteButton/DeleteButton'

type Data = {
  id: string
  task: string
}

type Props = {}
const DisplayTask = (props: Props) => {
  const [tasks, setTasks] = useState<Data[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const storeData: Data[] = []
      const querySnapshot = await getDocs(collection(db, 'tasks'))
      querySnapshot.forEach((doc) => {
        storeData.push({ id: doc.id, task: doc.data().task })
      })
      setTasks(storeData)
    }
    fetchData()
  }, [])
  console.log('tasks', tasks)

  return (
    <ul>
      {tasks
        ? tasks.map((element) => (
            <li key={element.id} className={styles.taskContainer}>
              <section className={styles.leftSection}>{element.task}</section>
              <section className={styles.rightSection}>
                <EditButton id={element.id} />
                <DeleteButton id={element.id} />
              </section>
            </li>
          ))
        : ''}
    </ul>
  )
}
export default DisplayTask
