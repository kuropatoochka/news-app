import styles from './styles.module.css'
import NewsList from "../NewsList/NewsList.jsx"
import Pagination from "../Pagination/Pagination.jsx"
import {useContext} from "react"
import {FilterContext} from "../../context/FilterContext.jsx"
import {useDebounce} from "../../helpers/hooks/useDebounce.js"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getNews} from "../../api/apiNews.js"

const NewsSection = () => {
  const { filters } = useContext(FilterContext)
  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords
  })

  return (
    <section className={styles.news_section}>
      <NewsList news={data && data.news} isLoading={isLoading}/>
      <Pagination/>
    </section>
  )
}
export default NewsSection