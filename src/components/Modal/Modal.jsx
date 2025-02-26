import FilterSection from "../FilterSection/FilterSection.jsx"
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, dataCategories, dataRegions }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <FilterSection dataCategories={dataCategories} dataRegions={dataRegions}/>,
    document.getElementById('modal-root')
  )
}

export default Modal