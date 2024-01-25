import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import styles from "./style.module.css";

export function SearchForm() {
  const { handleSearchByKeyword, classNameInput } = useContext(TableContext);

  const handleSearch = (keyword: string) => {
    handleSearchByKeyword && handleSearchByKeyword(keyword);
  };

  return (
    <form className={styles.form}>
      <label htmlFor="searchForm">Search</label>
      <input
        type="text"
        id="searchForm"
        onChange={(e) => handleSearch(e.target.value)}
        className={`${classNameInput}`}
      />
    </form>
  );
}
