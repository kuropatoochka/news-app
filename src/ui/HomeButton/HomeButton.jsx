import styles from './styles.module.css'
import home from '../../assets/home.svg'
import {useNavigate} from "react-router-dom"

const HomeButton = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <button className={styles.homeButton} onClick={handleNavigate}>
      <img className={styles.homeIcon} src={home} alt='home'/>
    </button>
  )
}

export default HomeButton