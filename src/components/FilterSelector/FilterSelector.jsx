import styles from './styles.module.css'
import {useContext, useState} from "react"
import {MAX_VISIBLE_FILTER} from "../../constants/constants.js"
import {FilterContext} from "../../context/FilterContext.jsx"

const FilterSelector = ({ filterKey, filterItems }) => {
  const [isFiltersOpen, setFiltersOpen] = useState(false)
  const {filters, dispatch} = useContext(FilterContext)
  const visibleFilterItems = filterItems.slice(0, MAX_VISIBLE_FILTER)

  return (
    <div>
      <button className={!filters[filterKey] ? styles.active : styles.item}
              onClick={() => dispatch({type: 'setFilter', key: filterKey, value: null})}>
        all
      </button>
      {(!isFiltersOpen ? visibleFilterItems : filterItems).map(filter => {
        return (
          <button
            className={filters[filterKey] === filter ? styles.active : styles.item}
            key={filter}
            onClick={() => dispatch({type: 'setFilter', key: filterKey, value: filter})}
          >
            {filter}
          </button>
        )
      })}
      <button className={styles.item} onClick={() => setFiltersOpen(!isFiltersOpen)}>
        {!isFiltersOpen ? 'show all' : 'hide'}
      </button>
    </div>
  )
}

export default FilterSelector