import defaultImg from '../../assets/default_banner.jpg'
import styles from './styles.module.css'
import {useResizeObserver} from "../../helpers/hooks/useResizeObserver.js"
import {useState} from "react"

const LatestNewsItem = ({ item, itemRef }) => {
  const infoWidth = useResizeObserver(itemRef)
  const [imageError, setImageError] = useState(false)

  return (
    <div className={styles.item}>
      <img
        className={styles.image}
        src={!imageError && item.image !== "None" ? item.image : defaultImg}
        alt="latestnew"
        onError={() => setImageError(true)}
      />
      <div className={styles.info} style={{width: `${infoWidth}px`}}>
        <h1>{item.title}</h1>
        <p>{item.author}</p>
      </div>
    </div>
  )
}

export default LatestNewsItem
