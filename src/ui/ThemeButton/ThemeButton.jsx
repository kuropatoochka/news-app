import lightMoon from '../../assets/moon_light.svg'
import darkMoon from '../../assets/moon_dark.svg'
import lightSun from '../../assets/sun_light.svg'
import darkSun from '../../assets/sun_dark.svg'
import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"

function ThemeButton() {
  const {isDarkMode, toggleTheme} = useTheme()

  return (
    <button className={styles.theme_button} onClick={toggleTheme}>
      <img className={styles.icon} src={isDarkMode ? darkSun : lightSun} alt='sun'/>
      <img className={styles.icon} src={isDarkMode ? lightMoon : darkMoon} alt='moon'/>
    </button>
  )
}

export default ThemeButton