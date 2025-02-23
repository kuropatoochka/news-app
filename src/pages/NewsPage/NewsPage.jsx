import styles from "./styles.module.css"
import { useLocation } from "react-router-dom"
import { useRef } from "react"
import ThemeButton from "../../ui/ThemeButton/ThemeButton.jsx"
import BannerNewsItem from "../../components/BannerNewsItem/BannerNewsItem.jsx"
import HomeButton from "../../ui/HomeButton/HomeButton.jsx"
import PublicationTime from "../../ui/PublicationTime/PublicationTime.jsx"
import FormattedDate from "../../ui/FormattedDate/FormattedDate.jsx"

const NewsPage = () => {
  const itemRef = useRef(null)
  const { state } = useLocation()
  const newsItem = state?.newsItem

  if (!newsItem) return <p>News item not found</p>

  const { id, description, published, url } = newsItem

  return (
    <div className={styles.item}>
      <div className={styles.banner} ref={itemRef}>
        <BannerNewsItem key={id} item={newsItem} itemRef={itemRef} />
        <div className={styles.bubble_top}>
          <ThemeButton />
          <FormattedDate />
        </div>
        <div className={styles.bubble_bottom}>
          <HomeButton />
        </div>
      </div>
      <div className={styles.item__info}>
        <div className={styles.description}>
          <h3 className={styles.text}>Description</h3>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.item__extra_info}>
          <PublicationTime newsPublication={published} />
          <a className={styles.link} href={url}>Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
