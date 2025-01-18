import {useEffect, useState} from "react"
import {getCategory, getNews} from "../../api/apiNews.js"
import NewsList from "../../components/NewsList/NewsList.jsx"
import Banner from "../../components/Banner/Banner.jsx"
import LastNewsList from "../../components/LastNewsList/LastNewsList.jsx"
import styles from './styles.module.css'
import CategoryList from "../../components/CategoryList/CategoryList.jsx";

const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews()
        setNews(response.news)
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
      <Banner news={news}/>
      <div className={styles.main__news}>
        <CategoryList categories={categories}/>
        <NewsList news={news} />
        <LastNewsList news={news}/>
      </div>
    </main>
  )
}

export default Main