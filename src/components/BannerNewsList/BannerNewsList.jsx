import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"
import BannerNewsItem from "../BannerNewsItem/BannerNewsItem.jsx"
import {useEffect, useMemo, useRef, useState} from "react"

const BannerNewsList = ({ news, bannerRef }) => {
  const [offsetY, setOffsetY] = useState(0)
  const intervalRef = useRef(null)

  const updateOffset = (direction) => {
    const maxOffset = -(bannerRef.current.offsetHeight * (news?.length - 1))
    setOffsetY((currentOffset) => {
      return (direction === 'up')
        ? Math.min(currentOffset + bannerRef.current.offsetHeight, 0)
        : (currentOffset !== maxOffset) ? currentOffset - bannerRef.current.offsetHeight : 0
    })
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => updateOffset('down'), 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  })

  const renderListOfNews = useMemo(() =>
    news.map(item => <BannerNewsItem key={item.id} item={item} bannerRef={bannerRef}/>),
    [news]
  )

  return (
    <div className={styles.window}>
      <ul className={styles.list} style={{transform: `translateY(${offsetY}px)`}}>
        {renderListOfNews}
      </ul>
      <div className={styles.toggle_buttons}>
        <img className={styles.arrowUp} src={darkArrow} alt='arrowUp' onClick={() => updateOffset('up')}/>
        <img className={styles.arrowDown} src={darkArrow} alt='arrowDown' onClick={() => updateOffset('down')}/>
      </div>
    </div>
  )
}

const LatestNewsWithSkeleton = withSkeleton(BannerNewsList, 'banner', 1)

export default LatestNewsWithSkeleton
