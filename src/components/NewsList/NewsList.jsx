import BigCard from "../BigCard/BigCard.jsx"
import Skeleton from "../Skeleton/Skeleton.jsx"
import styles from './styles.module.css'

function NewsList({ news, isLoading }) {
  return (
    <section className={styles.container}>
      {(!isLoading)
        ? news.map(item => (
          <BigCard key={item.id} item={item}/>
        ))
        : <Skeleton count={15} type={'item'}/>}
    </section>
  )
}

export default NewsList