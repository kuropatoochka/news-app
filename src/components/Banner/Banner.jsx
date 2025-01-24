import styles from './styles.module.css'
import { Carousel } from '../Carousel/Carousel.jsx'
import LastNewsButton from "../LastNewsButton/LastNewsButton.jsx"
import SearchInput from "../SearchInput/SearchInput.jsx";
import ThemeButton from "../ThemeButton/ThemeButton.jsx";
import Skeleton from "../Skeleton/Skeleton.jsx";
function Banner({ news, isLoading, keywords, setKeywords }) {
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
      {(news.length > 0 && !isLoading) ? <Carousel>{getTopImages(news)}</Carousel> : <Skeleton count={1} type={'banner'}/>}
      <span className={styles.bubble_top}>
        <ThemeButton />
        <SearchInput keywords={keywords} setKeywords={setKeywords}/>
      </span>
      <span className={styles.bubble_bottom}><LastNewsButton /></span>
    </div>
  )
}

export default Banner