import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"
import LatestNewsItem from "../LatestNewsItem/LatestNewsItem.jsx"
import {useEffect, useMemo, useRef, useState} from "react"

const LatestNewsList = ({ news }) => {
  const [offsetY, setOffsetY] = useState(0)
  const itemRef = useRef(null)
  const intervalRef = useRef(null)

  const updateOffset = (direction) => {
    const maxOffset = -(itemRef.current.offsetHeight * (news.length - 1))
    setOffsetY((currentOffset) => {
      return (direction === "up")
        ? Math.min(currentOffset + itemRef.current.offsetHeight, 0)
        : (currentOffset !== maxOffset) ? currentOffset - itemRef.current.offsetHeight : 0
    })
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => updateOffset("down"), 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  }, [])

  const renderListOfNews = useMemo(() =>
    news.map(item => <LatestNewsItem key={item.id} item={item} itemRef={itemRef}/>),
    [news]
  )

  return (
    <>
      <div className={styles.window} ref={itemRef}>
        <div className={styles.list} style={{transform: `translateY(${offsetY}px)`}}>
          {renderListOfNews}
        </div>
      </div>
      <div className={styles.toggle_buttons}>
        <img className={styles.arrowUp} src={darkArrow} alt="arrowUp" onClick={() => updateOffset("up")}/>
        <img className={styles.arrowDown} src={darkArrow} alt="arrowDown" onClick={() => updateOffset("down")}/>
      </div>
    </>
  )
}

const LatestNewsWithSkeleton = withSkeleton(LatestNewsList, 'banner', 1)

export default LatestNewsWithSkeleton
