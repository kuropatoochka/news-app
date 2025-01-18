import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.jsx"

function LastNewsButton() {
  const {isDarkMode} = useTheme()
  return (
    <a className={styles.button}>
      <h2>Last news</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 16 16">
        <path fill={isDarkMode ? '#090a0a' : '#fafafa'} fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"/>
      </svg>
    </a>
  )
}

export default LastNewsButton