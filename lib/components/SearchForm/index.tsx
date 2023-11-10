import styles from './style.module.css'

export  function SearchForm() {
  
  return (
    <form 
      className={styles.form}
    >
      <label htmlFor="searchForm">Search</label>
      <input type="text" id="searchForm" />
    </form>
  )

}