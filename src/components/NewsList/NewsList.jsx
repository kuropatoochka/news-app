import styles from './styles.module.css'
import BigCard from "../BigCard/BigCard.jsx"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"

function NewsList({ news }) {
  return (
    <ul className={styles.news_cards}>
      {news.map(item => (
          <BigCard
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 7)


export default NewsListWithSkeleton