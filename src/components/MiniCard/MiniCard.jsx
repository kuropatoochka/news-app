import styles from './styles.module.css'
import {formatPublishTime} from "../../helpers/formatPublishTime.js"
function MiniCard({ item }) {
  return (
    <article className={styles.card}>
      <p className={styles.card__title}>{item.title}</p>
      <p className={styles.subtext}>{formatPublishTime(item.published)} · {item.author}</p>
    </article>
  )
}

export default MiniCard