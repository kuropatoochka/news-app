import styles from './styles.module.css'

function SearchInput({keywords, setKeywords}) {
  return (
    <div className={styles.search_input}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search news..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}/>
      <button className={styles.button}>
        <svg className={styles.button_img} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l2.79 2.79a.75.75 0 1 1-1.06 1.06z"
                clipRule="evenodd"/>
        </svg>
      </button>
    </div>
  )
}

export default SearchInput