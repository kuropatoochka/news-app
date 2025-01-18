import styles from './styles.module.css'
import CardImage from "../CardImage/CardImage.jsx"
import {formatPublishTime} from "../../helpers/formatPublishTime.js"
import {useTheme} from "../../context/ThemeContext.jsx";
function BigCard({ item }) {
  const {isDarkMode} =useTheme()
  return (
    <article className={styles.card}>
      {(item.image !== "None" || item.image === null) ? <CardImage image={item.image} author={item.author}/> : null}
      <h3 className={styles.card__title}>{item.title}</h3>
      <div className={styles.card__extra_info}>
        <p className={styles.card__publishing}>{formatPublishTime(item.published)}</p>
        {(item.category.length) > 0 ? item.category.map(category => (
          <button className={styles.button} key={`${item.id}-${category}`}>{category}</button>
        )) : null}
      </div>
      <a className={styles.card__icon} href="">
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path fill={isDarkMode ? "#090a0a" : "#fafafa"} fillRule="evenodd"
                d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                clipRule="evenodd"/>
        </svg>
      </a>
    </article>
  )
}

export default BigCard