import FilterSelector from "./FilterSelector.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getCategory} from "../../api/apiNews.js"

const CategoriesFilter = ({selectedCategory, setSelectedCategory}) => {
  const {data: dataCategories} = useFetch(getCategory)

  return (
    <>
      {dataCategories ? (
        <FilterSelector
          title={'Categories'}
          filterItems={dataCategories.categories}
          selectedFilter={selectedCategory}
          setSelectedFilter={setSelectedCategory}
        />
      ) : null}
    </>

  )
}

export default CategoriesFilter