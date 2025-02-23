import defaultImg from '../../assets/default_banner.jpg'
import styles from './styles.module.css'
import {useResizeObserver} from "../../helpers/hooks/useResizeObserver.js"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const BannerNewsItem = ({ item, itemRef }) => {
  const infoWidth = useResizeObserver(itemRef)
  const [imageError, setImageError] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/news/${item?.id}`, {state: { newsItem: item }})
  }

  return (
    <div className={styles.item}>
      <img
        className={styles.image}
        src={!imageError && item.image !== "None" ? item.image : defaultImg}
        alt="latestnew"
        onError={() => setImageError(true)}
        onClick={handleNavigate}
      />
      <div className={styles.info} style={{width: `${infoWidth}px`}}>
        <h1>{item.title}</h1>
        <p>{item.author}</p>
      </div>
    </div>
  )
}

export default BannerNewsItem
