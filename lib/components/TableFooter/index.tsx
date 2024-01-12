import InfosEntries from "../InfosEntries"
import Pagination from "../Pagination"
import styles from './style.module.css'

export default function TableFooter() {

  
  return (
    <div className={`${styles.footer}`}>
        <InfosEntries />
        <Pagination />
    </div>
  )
}