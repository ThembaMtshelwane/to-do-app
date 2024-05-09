import EditModal from '@/components/Modals/EditModal/EditModal'
import AddTask from '@/components/TaskComponents/AddTask/AddTask'
import DisplayTask from '@/components/TaskComponents/DisplayTask/DisplayTask'

type Props = {}
const page = (props: Props) => {
  return (
    <section>
      <AddTask />
      <DisplayTask />
    </section>
  )
}
export default page
