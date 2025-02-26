import lightArrow from '../../assets/chevron_light.svg'
import darkArrow from '../../assets/chevron_dark.svg'
import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"
import {useContext} from "react"
import {FilterContext} from "../../context/FilterContext.jsx"
import {TOTAL_PAGES} from "../../constants/constants.js"

const Pagination = () => {
  const {isDarkMode} = useTheme()
  const {filters, dispatch} = useContext(FilterContext)

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => dispatch({type: "handlePreviousPage"})}
        disabled={filters.page_number <= 1}
      >
        <img className={styles.leftArrow} src={isDarkMode ? lightArrow : darkArrow} alt="previous"/>
      </button>
      <div className={styles.list}>
        {
          [...Array(TOTAL_PAGES)].map((_, index) =>
            <button
              className={styles.item}
              onClick={() => dispatch({type: "setFilter", key: "page_number", value: index + 1})}
              key={index}
              disabled={index + 1 === filters.page_number}
            >
              {index + 1}
            </button>
          )
        }
      </div>
      <button
        className={styles.arrow}
        onClick={() => dispatch({type: "handleNextPage"})}
        disabled={filters.page_number >= TOTAL_PAGES}
      >
        <img className={styles.rightArrow} src={isDarkMode ? lightArrow : darkArrow} alt="next" />
      </button>
    </div>
  )
}

export default Pagination