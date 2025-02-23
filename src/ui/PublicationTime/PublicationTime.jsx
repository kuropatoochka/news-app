import styles from "./styles.module.css"
import {formatPublishTime} from "../../helpers/formatPublishTime.js"

const PublicationTime = ({ newsPublication }) => {
  return (
    <p className={styles.card__publishing}>{formatPublishTime(newsPublication)}</p>
  )
}

export default PublicationTime