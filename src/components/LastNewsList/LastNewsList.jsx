import styles from './styles.module.css'
import MiniCard from "../MiniCard/MiniCard.jsx"

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