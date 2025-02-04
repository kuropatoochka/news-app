import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import {Children, cloneElement, useEffect, useState} from "react"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx"

const PAGE_HEIGHT = 500
const Carousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const handleUpClick = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + PAGE_HEIGHT, 0)
    })
  }
  const handleDownClick = () => {
    setOffset((currentOffset) => {
      const maxOffset = -(PAGE_HEIGHT * (pages.length - 1))
      return Math.max(currentOffset - PAGE_HEIGHT, maxOffset)
    })
  }
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: `${PAGE_HEIGHT}px`
          },
        })
      })
    )
  }, [children])

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <div className={styles.list}
             style={{
               transform: `translateY(${offset}px)`,
             }}
        >{pages}</div>
      </div>
      <div className={styles.toggle_buttons}>
        <img className={styles.arrowUp} src={darkArrow} alt="arrowUp" onClick={handleUpClick}/>
        <img className={styles.arrowDown} src={darkArrow} alt="arrowDown" onClick={handleDownClick}/>
      </div>
    </div>
  )
}

const CarouselWithSkeleton = withSkeleton(Carousel, 'banner', 1)

export default CarouselWithSkeleton
