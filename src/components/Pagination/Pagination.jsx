import arrow from '../../assets/chevronUp.svg'
import styles from './styles.module.css'

const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}>
        <img className={styles.leftArrow} src={arrow} alt="previous"/>
      </button>
      <div className={styles.list}>{[...Array(totalPages)].map((_, index) => {
        return <button
          onClick={() => handlePageClick(index + 1)}
          className={styles.item}
          key={index}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </button>
      })}</div>
      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= 10}>
        <img className={styles.rightArrow} src={arrow} alt="next" />
      </button>
    </div>
  )
}

export default Pagination