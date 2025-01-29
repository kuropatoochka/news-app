import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button className={styles.header__button}>Search</button>
      </div>
    </header>
  )
}

export default Header