import styles from "./styles.module.css"
import {formatDate} from "../../helpers/formatDate.js"

const FormattedDate = () => {
  return (
    <h3 className={styles.date}>{formatDate(new Date())}</h3>
  )
}

export default FormattedDate