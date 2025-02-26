import {createContext, useEffect, useReducer} from "react"
import {TOTAL_PAGES} from "../constants/constants.js"
import {useSearchParams} from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export const FilterContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'setFilter':
      return {
        ...state,
        [action.key]: action.value
      }
    case 'resetFilters':
      return {
        page_number: 1,
        category: null,
        region: null,
        keywords: ''
      }
    case 'clearSearch':
      return {
        ...state,
        [action.key]: ''
      }
    case 'handleNextPage':
      return {
        ...state,
        page_number: state.page_number < TOTAL_PAGES ? state.page_number + 1 : state.page_number
      }
    case 'handlePreviousPage':
      return {
        ...state,
        page_number: state.page_number > 1 ? state.page_number - 1 : state.page_number
      }
    default:
      throw new Error()
  }
}

export const FilterProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filtersFromUrl = {
    page_number: Number(searchParams.get('page_number')) || 1,
    category: searchParams.get('category') || null,
    region: searchParams.get('region') || null,
    keywords: searchParams.get('keywords') || ''
  }

  const [filters, dispatch] = useReducer(reducer, filtersFromUrl)

  useEffect(() => {
    const params = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== null)
    )
    setSearchParams(params)
  }, [filters, setSearchParams])

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}