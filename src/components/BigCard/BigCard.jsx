import lightArrow from '../../assets/arrow_light.svg'
import styles from './styles.module.css'
import PublicationTime from "../../ui/PublicationTime/PublicationTime.jsx"
import {useNavigation} from "../../helpers/hooks/useNavigation.js"
import {useContext} from "react"
import {FilterContext} from "../../context/FilterContext.jsx"
import {useImageError} from "../../helpers/hooks/useImageError.js"

const BigCard = ({ item }) => {
  const {imageError, handleError} = useImageError(item.image)
  const { handleToNews } = useNavigation()
  const {dispatch} = useContext(FilterContext)

  return (
    <li className={styles.card}>
      {!imageError &&
        <div className={styles.card__image}>
          <img
            className={styles.image}
            src={item.image}
            alt="news"
            onError={handleError}
            onClick={() => handleToNews(item)}
          />
          <span className={styles.bubble_top}>{item.author}</span>
        </div>
      }
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__extra_info}>
        <PublicationTime newsPublication={item.published}/>
        {item.category &&
          item.category.map(category =>
            <button
              className={styles.categories}
              key={category}
              onClick={() => dispatch({type: "setFilter", key: "category", value: category})}
            >
              {category}
            </button>
          )
        }
      </div>
      <span className={styles.bubble_bottom}>
        <button className={styles.card__icon} onClick={() => handleToNews(item)}>
          <img className={styles.arrow} src={lightArrow} alt="arrow"/>
        </button>
      </span>
    </li>
  )
}

export default BigCard