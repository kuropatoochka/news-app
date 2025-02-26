import styles from './styles.module.css'
import FilterSelector from "../FilterSelector/FilterSelector.jsx"
import {useContext} from "react"
import {FilterContext} from "../../context/FilterContext.jsx"

const FilterSection = ({ dataCategories, dataRegions }) => {
  const { dispatch } =useContext(FilterContext)

  return (
    <div className={styles.filters}>
      <p className={styles.title}>Categories</p>
      {dataCategories ? (
        <FilterSelector
          filterKey='category'
          filterItems={dataCategories.categories}
        />
      ) : null}

      <p className={styles.title}>Regions</p>
      {dataRegions ? (
        <FilterSelector
          filterKey='region'
          filterItems={Object.keys(dataRegions.regions)}
        />
      ) : null}
      <button className={styles.button} onClick={() => dispatch({type: 'resetFilters'})}>Reset filters</button>
    </div>
  )
}

export default FilterSection

