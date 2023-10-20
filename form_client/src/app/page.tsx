import styles from './page.module.css'
import { DynamicForm } from '../components/DynamicForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <DynamicForm />
    </main>
  )
}
