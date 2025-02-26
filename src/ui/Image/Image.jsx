import styles from "./styles.module.css"
import {useEffect, useState} from "react"
import {useNavigation} from "../../helpers/hooks/useNavigation.js"

const Image = ({ src, defaultSrc, item, isNewsPage= false, cardImage = false, setIsImageUpload}) => {
  const [imageError, setImageError] = useState(false)
  const { handleToNews } = useNavigation()

  useEffect(() => {
    if (imageError && setIsImageUpload) {
      setIsImageUpload(true)
    }
  }, [imageError, setIsImageUpload])

  return (
    <>
      {
        (!imageError && item.image !== "None")
          ? <img
            className={styles.image}
            src={src}
            alt='news'
            onError={() => {setImageError(true)}}
            onClick={() => handleToNews(item, isNewsPage)}
          />
          : !cardImage
            ? <img
              className={styles.image}
              src={defaultSrc}
              alt='news'
              onClick={() => handleToNews(item, isNewsPage)}
            />
            : null
      }
    </>
  )
}

export default Image