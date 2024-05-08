import styles from './addbutton.module.css'

type Props = {}
const AddButton = (props: Props) => {
  return (
    <button type="submit" className={styles.button}>
      Add
    </button>
  )
}
export default AddButton
