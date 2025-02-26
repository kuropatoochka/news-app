import defaultImg from '../../assets/default_banner.jpg'
import styles from './styles.module.css'
import {useResizeObserver} from "../../helpers/hooks/useResizeObserver.js"
import {useNavigation} from "../../helpers/hooks/useNavigation.js"
import {useImageError} from "../../helpers/hooks/useImageError.js"

const BannerNewsItem = ({ item, bannerRef}) => {
  const {imageError, handleError} = useImageError(item.image)
  const infoWidth = useResizeObserver(bannerRef)
  const { handleToNews } = useNavigation()

  return (
    <li className={styles.item}>
      <img
        className={styles.image}
        src={!imageError ? item.image : defaultImg}
        alt="news"
        onError={handleError}
        onClick={() => {
          handleToNews(item)
        }}
      />
      <div className={styles.info} style={{width: `${infoWidth}px`}}>
        <h1>{item.title}</h1>
        <p>{item.author}</p>
      </div>
    </li>
  )
}

export default BannerNewsItem
