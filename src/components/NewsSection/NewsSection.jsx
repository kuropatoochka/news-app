import styles from './styles.module.css'
import NewsList from "../NewsList/NewsList.jsx"
import Pagination from "../Pagination/Pagination.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getNews} from "../../api/apiNews.js"
import {TOTAL_PAGES} from "../../constants/constants.js"

const NewsSection = ({ filters, setPageNumber, debouncedKeywords, setSelectedCategory }) => {
  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords
  })

  const handleNextPage = () => {
    filters.page_number < TOTAL_PAGES ? setPageNumber(filters.page_number + 1) : null
  }
  const handlePreviousPage = () => {
    filters.page_number > 1 ? setPageNumber(filters.page_number - 1) : null
  }
  const handlePageClick = (pageNumber) => {
    setPageNumber(pageNumber)
  }

  return (
    <section className={styles.news_section}>
      <div className={styles.news_wrapper}>
        <NewsList
          news={data?.news}
          isLoading={isLoading}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage = {filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  )
}
export default NewsSection