import styles from './styles.module.css'

function CategoryList({ categories, setSelectedCategory, selectedCategory }) {
  return (
    <div className={styles.list}>
      {categories.map(category => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? styles.active : styles.item} key={category}>{category}</button>
        )
      })}
    </div>
  )
}

export default CategoryList