import styles from './styles.module.css'
import ThemeButton from "../../ui/ThemeButton/ThemeButton.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getLatestNews} from "../../api/apiNews.js"
import BannerNewsList from "../BannerNewsList/BannerNewsList.jsx"
import FormattedDate from "../../ui/FormattedDate/FormattedDate.jsx"
import {useRef} from "react"

const Banner = () => {
  const bannerRef = useRef(null)
  const { data, isLoading } = useFetch(getLatestNews)

  return (
    <section className={styles.banner} ref={bannerRef}>
      <BannerNewsList news={data && data.news} isLoading={isLoading} bannerRef={bannerRef}/>
      <span className={styles.bubble_top}>
        <ThemeButton/>
        <FormattedDate/>
      </span>
    </section>
  )
}

export default Banner