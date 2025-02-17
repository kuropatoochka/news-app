import styles from './styles.module.css'
import {useState} from "react"
import {MAX_VISIBLE_CATEGORIES} from "../../constants/constants.js"

function CategoryList({ categories, setSelectedCategory, selectedCategory }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const visibleCategories = categories.slice(0, MAX_VISIBLE_CATEGORIES)

  return (
    <div className={styles.list}>
      <button className={!selectedCategory ? styles.active : styles.item}
              onClick={() => setSelectedCategory(null)}>
        all
      </button>
      {(!isModalOpen ? visibleCategories : categories).map(category => {
        return (
          <button
            className={selectedCategory === category ? styles.active : styles.item}
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        )
      })}
      <button className={styles.item} onClick={() => setModalOpen(!isModalOpen)}>
        {!isModalOpen ? 'show all' : 'hide'}
      </button>
    </div>
  )
}

export default CategoryList