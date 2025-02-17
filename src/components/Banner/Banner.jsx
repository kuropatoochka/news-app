import styles from './styles.module.css'
import ThemeButton from "../ThemeButton/ThemeButton.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getLatestNews} from "../../api/apiNews.js"
import LatestNewsList from "../LatestNewsList/LatestNewsList.jsx"
import {formatDate} from "../../helpers/formatDate.js"

const Banner = () => {
  const { data, isLoading } = useFetch(getLatestNews)

  return (
    <div className={styles.banner}>
      <LatestNewsList news={data && data.news} isLoading={isLoading} />
      <span className={styles.bubble_top}>
        <ThemeButton />
        <h3 className={styles.date}>{formatDate(new Date())}</h3>
      </span>
      <span className={styles.bubble_bottom}></span>
    </div>
  )
}

export default Banner