import styles from './styles.module.css'
import BigCard from "../BigCard/BigCard.jsx";
function NewsList({ news }) {
  return (
    <section className={styles.container}>
      {news.map(item => (
        <BigCard key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default NewsList