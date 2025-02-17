import styles from './styles.module.css'
import CategoryList from "../CategoryList/CategoryList.jsx"
import NewsSearch from "../NewsSearch/NewsSearch.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getCategory} from "../../api/apiNews.js"

const SideBar = ({ keywords, setKeywords, selectedCategory, setSelectedCategory }) => {
  const {data: dataCategories} = useFetch(getCategory)

  return (
    <div className={styles.sidebar}>
      <NewsSearch keywords={keywords} setKeywords={setKeywords}/>
      {dataCategories ? (
        <CategoryList
          categories={dataCategories.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : null}
    </div>
  )
}

export default SideBar