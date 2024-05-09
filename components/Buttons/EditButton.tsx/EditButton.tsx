'use client'

import modStyles from '../modifierButtons.module.css'
import EditModal from '@/components/Modals/EditModal/EditModal'
import { useState } from 'react'

type Props = { id: string }
const EditButton = ({ id }: Props) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const openEditModal = () => {
    setShowEditModal(true)
  }
  return (
    <section className={''}>
      <button onClick={openEditModal} className={modStyles.buttons}>
        Edit
      </button>
      {showEditModal ? (
        <EditModal
          id={id}
          show={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      ) : (
        ''
      )}
    </section>
  )
}
export default EditButton
