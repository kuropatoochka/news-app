import lightArrow from '../../assets/arrow_light.svg'
import styles from './styles.module.css'
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import PublicationTime from "../../ui/PublicationTime/PublicationTime.jsx"

const BigCard = ({ item, setSelectedCategory }) => {
  const [imageError, setImageError] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/news/${item?.id}`, {state: { newsItem: item }})
  }

  return (
    <article className={styles.card}>
      {!imageError && item.image !== "None"
        ? <img
          className={styles.image}
          src={item.image}
          alt="news"
          onError={() => setImageError(true)}
          onClick={handleNavigate}
        />
        : null}
      {!imageError && item.image !== "None" && <span className={styles.bubble_top}>{item.author}</span>}
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__extra_info}>
        <PublicationTime newsPublication={item.published}/>
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
        <button className={styles.card__icon} onClick={handleNavigate}>
          <img className={styles.arrow} src={lightArrow} alt="arrow"/>
        </button>
      </span>
    </article>
  )
}

export default BigCard