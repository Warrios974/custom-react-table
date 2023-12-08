import { useContext } from "react";
import InfosEntries from "../InfosEntries"
import Pagination from "../Pagination"
import styles from './style.module.css'
import { TableContext } from "../../contexts/TableContext";

export default function TableFooter() {
  
  const dataContext = useContext(TableContext)
  
  return (
    <div className={`${styles.footer}`}>
        {dataContext.displayInfoEntries && <InfosEntries />}
        <Pagination />
    </div>
  )
}