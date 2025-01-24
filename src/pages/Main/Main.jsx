import {useEffect, useState} from "react"
import {getCategory, getNews} from "../../api/apiNews.js"
import NewsList from "../../components/NewsList/NewsList.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import LastNewsList from "../../components/LastNewsList/LastNewsList.jsx"
import CategoryList from "../../components/CategoryList/CategoryList.jsx"
import Pagination from "../../components/Pagination/Pagination.jsx"
import styles from './styles.module.css'
import {useDebounce} from "../../hooks/useDebounce.js";

const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [keywords, setKeywords] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSize = 15

  const debouncedKeywords = useDebounce(keywords, 1500)

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "all" ? null : selectedCategory,
        keywords: debouncedKeywords
      })
      setNews(response.news)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory, debouncedKeywords])

  const fetchCategory = async () => {
    try {
      const response = await getCategory()
      setCategories(["all", ...response.categories])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])
  
  const handleNextPage = () => {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : null
  }
  const handlePreviousPage = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : null
  }
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={styles.main}>
      <Banner news={news} isLoading={isLoading} keywords={keywords} setKeywords={setKeywords}/>
      <div className={styles.main__news}>
        <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <LastNewsList news={news}/>
        <div >
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage = {currentPage}
            totalPages={totalPages}
          />
          <NewsList news={news} isLoading={isLoading}/>
          <Pagination
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage = {currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </main>
  )
}

export default Main