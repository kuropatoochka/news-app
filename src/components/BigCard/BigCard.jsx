import lightArrow from '../../assets/arrow_light.svg'
import styles from './styles.module.css'
import {formatPublishTime} from "../../helpers/formatPublishTime.js"
import {useState} from "react"

const BigCard = ({ item, setSelectedCategory }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <article className={styles.card}>
      {!imageError && item.image !== "None"
        ? <img
          className={styles.image}
          src={item.image}
          alt="news"
          onError={() => setImageError(true)}
        />
        : null}
      {!imageError && item.image !== "None" && <span className={styles.bubble_top}>{item.author}</span>}
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__extra_info}>
        <p className={styles.card__publishing}>{formatPublishTime(item.published)}</p>
        {item.category
          && item.category.map(category =>
            <button
              className={styles.categories}
              key={`${item.id}-${category}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        }
      </div>
      <span className={styles.bubble_bottom}>
        <button className={styles.card__icon}>
          <img className={styles.arrow} src={lightArrow} alt="arrow"/>
        </button>
      </span>
    </article>
  )
}

export default BigCard