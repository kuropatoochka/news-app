import MiniCard from "../MiniCard/MiniCard.jsx"
import styles from './styles.module.css'

function LastNewsList({ news }) {
  return (
    <section className={styles.container}>
      {news.map(item => (
        <MiniCard key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default LastNewsList