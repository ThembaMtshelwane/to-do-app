'use client'

import { auth, db } from '@/firebase/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import styles from './displaytask.module.css'
import EditButton from '@/components/Buttons/EditButton.tsx/EditButton'
import DeleteButton from '@/components/Buttons/DeleteButton/DeleteButton'
import { useAuthState } from 'react-firebase-hooks/auth'

type Data = {
  id: string
  task: string
}

type Props = {}
const DisplayTask = (props: Props) => {
  const [tasks, setTasks] = useState<Data[]>([])
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.uid) {
        const storeData: Data[] = []
        const querySnapshot = await getDocs(
          collection(db, 'users/tasks', user.uid)
        )
        querySnapshot.forEach((doc) => {
          storeData.push({ id: doc.id, task: doc.data().task })
        })
        setTasks(storeData)
      }
    }
    fetchData()
  }, [user])
  console.log('tasks', tasks)

  return (
    <section>
      <ul>
        {tasks
          ? tasks.map((element) => (
              <li key={element.id} className={styles.taskContainer}>
                <section className={styles.leftSection}>{element.task}</section>
                <section className={styles.rightSection}>
                  {/* <EditButton openModal={openEditModal} /> */}
                  <EditButton id={element.id} />
                  <DeleteButton id={element.id} />
                </section>
                {/* <EditModal
                  id={element.id}
                  show={showEditModal}
                  setShowEditModal={setShowEditModal}
                /> */}
              </li>
            ))
          : ''}
      </ul>
    </section>
  )
}
export default DisplayTask
