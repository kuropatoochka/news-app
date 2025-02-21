import styles from './styles.module.css'
import NewsSearch from "../NewsSearch/NewsSearch.jsx"
import CategoriesFilter from "../Filter/CategoriesFilter.jsx"
import RegionsFilter from "../Filter/RegionsFilter.jsx"

const SideBar = ({ keywords, setKeywords, selectedCategory, setSelectedCategory, selectedRegion, setSelectedRegion }) => {
  return (
    <div className={styles.sidebar}>
      <NewsSearch keywords={keywords} setKeywords={setKeywords}/>
      <CategoriesFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RegionsFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </div>
  )
}

export default SideBar