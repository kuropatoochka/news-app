import styles from './styles.module.css'
import Carousel from '../Carousel/Carousel.jsx'
import LastNewsButton from "../LastNewsButton/LastNewsButton.jsx"
import SearchInput from "../SearchInput/SearchInput.jsx"
import ThemeButton from "../ThemeButton/ThemeButton.jsx"

function Banner({ news, isLoading, keywords, setKeywords }) {
  const getTopImages = (news) => {
    const topNews =  news.reduce((result, item) => {
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
    return topNews
  }

  return (
    <div className={styles.container}>
      <Carousel isLoading={isLoading}>{getTopImages(news)}</Carousel>
      <span className={styles.bubble_top}>
        <ThemeButton />
        <SearchInput keywords={keywords} setKeywords={setKeywords}/>
      </span>
      <span className={styles.bubble_bottom}>
        <LastNewsButton />
      </span>
    </div>
  )
}

export default Banner