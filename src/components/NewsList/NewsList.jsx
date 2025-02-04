import styles from './styles.module.css'
import BigCard from "../BigCard/BigCard.jsx"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"

function NewsList({ news }) {
  return (
    <section className={styles.container}>
      {news.map(item => (
          <BigCard key={item.id} item={item}/>
        ))}
    </section>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)


export default NewsListWithSkeleton