import styles from './styles.module.css'

function SearchInput({keywords, setKeywords}) {
  return (
    <input
      className={styles.search_input}
      type="text"
      placeholder="Search news..."
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}/>
  )
}

export default SearchInput