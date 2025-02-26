import styles from './styles.module.css'
import home from '../../assets/home.svg'
import {useNavigation} from "../../helpers/hooks/useNavigation.js"

const HomeButton = () => {
  const { goBack } = useNavigation()

  return (
    <button className={styles.homeButton} onClick={goBack}>
      <img className={styles.homeIcon} src={home} alt='home'/>
    </button>
  )
}

export default HomeButton