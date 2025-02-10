import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"
import LatestNewsItem from "../LatestNewsItem/LatestNewsItem.jsx"
import {useRef, useState} from "react"

const LatestNewsList = ({ news }) => {
  const itemRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)

  const handleUpClick = () => {
    setOffsetY((currentOffset) => {
      return Math.min(currentOffset + itemRef.current.offsetHeight, 0)
    })
  }

  const handleDownClick = () => {
    setOffsetY((currentOffset) => {
      const maxOffset = -(itemRef.current.offsetHeight * (news.length - 1))
      return Math.max(currentOffset - itemRef.current.offsetHeight, maxOffset)
    })
  }

  return (
    <div className={styles.container} ref={itemRef}>
      <div className={styles.window}>
        <div className={styles.list}
             style={{transform: `translateY(${offsetY}px)`}}
        >
          {news.map(item => (
            <LatestNewsItem key={item.id} item={item} itemRef={itemRef}/>
          ))}
        </div>
      </div>
      <div className={styles.toggle_buttons}>
        <img className={styles.arrowUp} src={darkArrow} alt="arrowUp" onClick={handleUpClick}/>
        <img className={styles.arrowDown} src={darkArrow} alt="arrowDown" onClick={handleDownClick}/>
      </div>
    </div>
  )
}

const LatestNewsWithSkeleton = withSkeleton(LatestNewsList, 'banner', 1)

export default LatestNewsWithSkeleton
