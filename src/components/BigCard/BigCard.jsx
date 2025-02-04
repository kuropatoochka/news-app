import lightArrow from '../../assets/arrow_light.svg'
import styles from './styles.module.css'
import CardImage from "../CardImage/CardImage.jsx"
import {formatPublishTime} from "../../helpers/formatPublishTime.js"

const BigCard = ({ item }) => {
  return (
    <article className={styles.card}>
      {(item.image !== "None" || item.image === null)
        ? <CardImage image={item.image} author={item.author}/> : null}
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__extra_info}>
        <p className={styles.card__publishing}>{formatPublishTime(item.published)}</p>
        {(item.category.length) > 0 ? item.category.map(category => (
          <button className={styles.categories} key={`${item.id}-${category}`}>{category}</button>
        )) : null}
      </div>
      <span className={styles.bubble_bottom}/>
      <button className={styles.card__icon}>
        <img className={styles.arrow} src={lightArrow} alt="arrow"/>
      </button>
    </article>
  )
}

export default BigCard