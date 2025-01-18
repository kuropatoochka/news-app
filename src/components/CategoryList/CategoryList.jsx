import styles from './styles.module.css'

function CategoryList({ categories }) {
  return (
    <section className={styles.list}>
      {categories.map(category => (
        <button className={styles.button} key={category}>{category}</button>
      ))}
    </section>
  )
}

export default CategoryList