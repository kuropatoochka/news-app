import styles from './styles.module.css'
import crossDark from '../../assets/xmark_dark.svg'
import crossLight from '../../assets/xmark_light.svg'
import {useTheme} from "../../context/ThemeContext.jsx"
import {useContext} from "react"
import {FilterContext} from "../../context/FilterContext.jsx"

function NewsSearch() {
  const {filters, dispatch} = useContext(FilterContext)
  const {isDarkMode} = useTheme()

  return (
    <form className={styles.search}>
      <input
        className={styles.input}
        type='text'
        placeholder='Search news...'
        value={filters.keywords}
        onChange={(e) => dispatch({type: 'setFilter', key: 'keywords', value: e.target.value})}
      />
      <img
        src={isDarkMode ? crossLight : crossDark}
        alt='deleteIcon'
        onClick={() => dispatch({ type: 'clearSearch', key: 'keywords' })}
      />
    </form>
  )
}

export default NewsSearch