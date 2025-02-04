import lightArrow from '../../assets/arrow_light.svg'
import darkArrow from '../../assets/arrow_dark.svg'
import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"

function LastNewsButton() {
  const {isDarkMode} = useTheme()
  return (
    <a className={styles.button}>
      <h2>Last news</h2>
      <img className={styles.arrow} src={isDarkMode ? darkArrow : lightArrow} alt="arrow"/>
    </a>
  )
}

export default LastNewsButton