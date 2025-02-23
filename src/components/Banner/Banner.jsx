import styles from './styles.module.css'
import ThemeButton from "../../ui/ThemeButton/ThemeButton.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getLatestNews} from "../../api/apiNews.js"
import BannerNewsList from "../BannerNewsList/BannerNewsList.jsx"
import FormattedDate from "../../ui/FormattedDate/FormattedDate.jsx"

const Banner = () => {
  const { data, isLoading } = useFetch(getLatestNews)

  return (
    <div className={styles.banner}>
      <BannerNewsList news={data && data.news} isLoading={isLoading} />
      <span className={styles.bubble_top}>
        <ThemeButton />
        <FormattedDate />
      </span>
      <span className={styles.bubble_bottom}></span>
    </div>
  )
}

export default Banner