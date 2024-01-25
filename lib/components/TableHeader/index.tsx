import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { SearchForm } from "../SearchForm";
import { SelectEntries } from "../SelectEntries";
import styles from "./styles.module.css";

export function TableHeader() {
  const data = useContext(TableContext);

  return (
    <div
      className={`${styles.header} ${
        data.classNameHeader && data.classNameHeader
      }`}
    >
      <h2>{data.title}</h2>

      <div className={`${styles.filters}`}>
        {data.displayEntries && <SelectEntries />}
        {data.displaySearchBar && <SearchForm />}
      </div>
    </div>
  );
}
