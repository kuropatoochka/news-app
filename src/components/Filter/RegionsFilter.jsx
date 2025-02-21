import FilterSelector from "./FilterSelector.jsx"
import {useFetch} from "../../helpers/hooks/useFetch.js"
import {getRegion} from "../../api/apiNews.js"

const RegionsFilter = ({ selectedRegion, setSelectedRegion }) => {
  const {data: dataRegions} = useFetch(getRegion)

  return (
    <>
      {dataRegions ? (
        <FilterSelector
          title={'Regions'}
          filterItems={Object.keys(dataRegions.regions)}
          selectedFilter={selectedRegion}
          setSelectedFilter={setSelectedRegion}
        />
      ) : null}
    </>

  )
}

export default RegionsFilter