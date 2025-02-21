import styles from './styles.module.css'
import Banner from "../../components/Banner/Banner.jsx"
import {useDebounce} from "../../helpers/hooks/useDebounce.js"
import {useFilters} from "../../helpers/hooks/useFilters.js"
import {PAGE_SIZE} from "../../constants/constants.js"
import SideBar from "../../components/SideBar/SideBar.jsx"
import NewsSection from "../../components/NewsSection/NewsSection.jsx"

const Main = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    region: null,
    keywords: ''
  })
  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  return (
    <main className={styles.main}>
      <Banner />
      <NewsSection
        filters={filters}
        setPageNumber={pageNumber => changeFilter('page_number', pageNumber)}
        debouncedKeywords={debouncedKeywords}
        setSelectedCategory={(category) => changeFilter('category', category)}
      />
      <SideBar
        keywords={filters.keywords}
        setKeywords={keywords => changeFilter('keywords', keywords)}
        selectedCategory={filters.category}
        setSelectedCategory={(category) => changeFilter('category', category)}
        selectedRegion={filters.region}
        setSelectedRegion={(region) => {
          changeFilter('region', region)
        }}
      />
    </main>
)
}

export default Main