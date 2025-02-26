import styles from './styles.module.css'
import {useResizeObserver} from "../../helpers/hooks/useResizeObserver.js"
import {useState} from "react"
import NewsSearch from "../NewsSearch/NewsSearch.jsx"
import Modal from "../Modal/Modal.jsx"
import FilterSection from "../FilterSection/FilterSection.jsx"

const SideBar = ({ dataCategories, dataRegions, windowRef }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const {mobileWindow} = useResizeObserver(windowRef)

  return (
    <div className={styles.sidebar}>
      <NewsSearch/>
      {mobileWindow ?
        <div id={'modal-root'}>
          <button
            className={styles.button}
            onClick={() => setModalOpen(!isModalOpen)}
          >
            {!isModalOpen ? 'Show filters' : 'Hide filters'}
          </button>
          <Modal isOpen={isModalOpen} dataCategories={dataCategories} dataRegions={dataRegions}/>
        </div>
        : <FilterSection dataCategories={dataCategories} dataRegions={dataRegions}/>
      }
    </div>
  )
}

export default SideBar