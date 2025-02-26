import styles from './styles.module.css'
import Banner from "../../components/Banner/Banner.jsx"
import SideBar from "../../components/SideBar/SideBar.jsx"
import NewsSection from "../../components/NewsSection/NewsSection.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getCategory, getRegion} from "../../api/apiNews.js"
import {useRef} from "react"

const MainPage = () => {
  const windowRef = useRef(null)
  const {data: dataRegions} = useFetch(getRegion)
  const {data: dataCategories} = useFetch(getCategory)

  return (
    <main className={styles.main} ref={windowRef}>
      <Banner/>
      <NewsSection/>
      <SideBar
        dataRegions={dataRegions}
        dataCategories={dataCategories}
        windowRef={windowRef}
      />
    </main>
  )
}

export default MainPage