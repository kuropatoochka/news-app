import styles from './styles.module.css'
import BigCard from "../BigCard/BigCard.jsx"
import Skeleton from "../Skeleton/Skeleton.jsx"
function NewsList({ news, isLoading }) {
  return (
    <section className={styles.container}>
      {(!isLoading)
        ? news.map(item => (
          <BigCard key={item.id} item={item}/>
        ))
        : <Skeleton count={10} type={'item'}/>}
    </section>
  )
}

export default NewsList