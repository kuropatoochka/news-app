import styles from './styles.module.css'
import {useState} from "react"
import {MAX_VISIBLE_FILTER} from "../../constants/constants.js"

const FilterSelector = ({title, filterItems, selectedFilter, setSelectedFilter}) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const visibleFilterItems = filterItems.slice(0, MAX_VISIBLE_FILTER)

  return (
    <div className={styles.list}>
      <p className={styles.title}>{title}</p>
      <div className={styles.filters}>
        <button className={!selectedFilter ? styles.active : styles.item}
                onClick={() => setSelectedFilter(null)}>
          all
        </button>
        {(!isModalOpen ? visibleFilterItems : filterItems).map(filter => {
          return (
            <button
              className={selectedFilter === filter ? styles.active : styles.item}
              key={filter}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          )
        })}
      </div>
      <button className={styles.item} onClick={() => setModalOpen(!isModalOpen)}>
        {!isModalOpen ? 'show all' : 'hide'}
      </button>
    </div>
  )
}

export default FilterSelector