import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.mainContainer}>
        <h1 className={styles.header}>Welcome to the To Do App</h1>
        <section className={styles.bodyContainer}>
          <section className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            officia magnam, earum autem, similique, nesciunt sapiente minus
            totam dolores itaque alias dignissimos illum modi temporibus dolor
            mollitia explicabo.
          </section>
          <ul className={styles.functionality}>
            <li className={styles.item}>Add</li>
            <li className={styles.item}>Edit</li>
            <li className={styles.item}>Delete</li>
          </ul>
        </section>
      </section>
    </>
  )
}
