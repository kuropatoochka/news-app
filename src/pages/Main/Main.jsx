import {getCategory, getNews} from "../../api/apiNews.js"
import NewsList from "../../components/NewsList/NewsList.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import LastNewsList from "../../components/LastNewsList/LastNewsList.jsx"
import CategoryList from "../../components/CategoryList/CategoryList.jsx"
import Pagination from "../../components/Pagination/Pagination.jsx"
import {useDebounce} from "../../helpers/hooks/useDebounce.js"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {useFilters} from "../../helpers/hooks/useFilters.js"
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.js"
import styles from './styles.module.css'

const Main = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  })
  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords
  })

  const {data: dataCategories} = useFetch(getCategory)

  const handleNextPage = () => {
    filters.page_number < TOTAL_PAGES ? changeFilter('page_number', filters.page_number + 1) : null
  }
  const handlePreviousPage = () => {
    filters.page_number > 1 ? changeFilter('page_number', filters.page_number - 1) : null
  }
  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <main className={styles.main}>
      {data ? <Banner news={data.news} isLoading={isLoading} keywords={filters.keywords} setKeywords={(keywords) => {
        changeFilter('keywords', keywords)
      }}/> : null}
      <div className={styles.main__news}>
        {dataCategories ? (
          <CategoryList
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => {
              changeFilter('category', category)
            }}
          />
        ) : null}
        {data ? <LastNewsList news={data.news}/> : null}
        <div >
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage = {filters.page_number}
            totalPages={TOTAL_PAGES}
          />
          <NewsList news={data?.news} isLoading={isLoading}/>
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage = {filters.page_number}
            totalPages={TOTAL_PAGES}
          />
        </div>
      </div>
    </main>
  )
}

export default Main