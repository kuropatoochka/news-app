import defaultImg from '../../assets/default_banner.jpg'
import styles from './styles.module.css'
import {useResizeObserver} from "../../helpers/hooks/useResizeObserver.js"

const LatestNewsItem = ({ item, itemRef }) => {
  const infoWidth = useResizeObserver(itemRef)

  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image !== "None" ? item.image : defaultImg} alt="latestnew"/>
      <div className={styles.info} style={{width: `${infoWidth}px`}}>
        <h1>{item.title}</h1>
        <p>{item.author}</p>
      </div>
    </div>
  )
}

export default LatestNewsItem
