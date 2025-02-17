import styles from './styles.module.css'
import crossDark from '../../assets/xmark_dark.svg'
import crossLight from '../../assets/xmark_light.svg'
import {useTheme} from "../../context/ThemeContext.jsx"

function NewsSearch({keywords, setKeywords}) {
  const {isDarkMode} = useTheme()

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search news..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <img src={isDarkMode ? crossLight : crossDark} alt="deleteIcon" onClick={() => setKeywords('')}/>
    </div>

  )
}

export default NewsSearch