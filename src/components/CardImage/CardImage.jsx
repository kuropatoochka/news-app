import styles from './styles.module.css'

function CardImage({ image, author }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="news"/>
      <span className={styles.bubble}>{author}</span>
    </div>
  )
}

export default CardImage