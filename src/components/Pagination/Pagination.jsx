import lightArrow from '../../assets/chevron_light.svg'
import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  const {isDarkMode} = useTheme()

  return (
    <div className={styles.container}>
      <button
        className={styles.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}>
        <img className={styles.leftArrow} src={isDarkMode ? lightArrow : darkArrow} alt="previous"/>
      </button>
      <div className={styles.list}>{[...Array(totalPages)].map((_, index) => {
        return <button
          className={styles.item}
          onClick={() => handlePageClick(index + 1)}
          key={index}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      })}</div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= 10}>
        <img className={styles.rightArrow} src={isDarkMode ? lightArrow : darkArrow} alt="next" />
      </button>
    </div>
  )
}

export default Pagination