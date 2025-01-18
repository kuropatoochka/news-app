import {useEffect, useState} from "react"
import {getCategory, getNews} from "../../api/apiNews.js"
import NewsList from "../../components/NewsList/NewsList.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import LastNewsList from "../../components/LastNewsList/LastNewsList.jsx"
import CategoryList from "../../components/CategoryList/CategoryList.jsx"
import styles from './styles.module.css'

const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const response = await getNews()
        setNews(response.news)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory()
        setCategories(response.categories)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategory()
  }, [])
  return (
    <main className={styles.main}>
      <Banner news={news} isLoading={isLoading}/>
      <div className={styles.main__news}>
        <CategoryList categories={categories}/>
        <NewsList news={news} isLoading={isLoading}/>
        <LastNewsList news={news}/>
      </div>
    </main>
  )
}

export default Main