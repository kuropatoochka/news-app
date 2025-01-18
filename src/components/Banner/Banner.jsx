import styles from './styles.module.css'
import { Carousel } from '../Carousel/Carousel.jsx'
import LastNewsButton from "../LastNewsButton/LastNewsButton.jsx"
import SearchInput from "../SearchInput/SearchInput.jsx";
import ThemeButton from "../ThemeButton/ThemeButton.jsx";
function Banner({ news }) {
  const getTopImages = (news) => {
    return news.reduce((result, item) => {
      if (result.length < 3 && item.image !== 'None') {
        result.push(
          <img
            className={styles.image}
            key={item.id}
            src={item.image}
            alt={'image'}
          />
        )
      }
      return result
    }, [])
  }

  return (
    <div className={styles.container}>
      <Carousel>{getTopImages(news)}</Carousel>
      <span className={styles.bubble_top}>
        <ThemeButton />
        <SearchInput />
      </span>
      <span className={styles.bubble_bottom}><LastNewsButton /></span>
    </div>
  )
}

export default Banner