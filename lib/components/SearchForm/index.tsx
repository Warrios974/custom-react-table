import { useContext } from 'react';
import styles from './style.module.css'
import { TableContext } from '../../contexts/TableContext';

export  function SearchForm() {

  const { handleSearchByKeyword } = useContext(TableContext);

  const handleSearch = (keyword: string) => {
    handleSearchByKeyword && handleSearchByKeyword(keyword);
  }

  return (
    <form 
      className={styles.form}
    >
      <label htmlFor="searchForm">Search</label>
      <input type="text" id="searchForm" onChange={(e) => handleSearch(e.target.value)} />
    </form>
  )

}