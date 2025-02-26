import styles from "./styles.module.css"
import {formatDate} from "../../helpers/formatDate.js"

const FormattedDate = () => {
  return (
    <p className={styles.date}>{formatDate(new Date())}</p>
  )
}

export default FormattedDate