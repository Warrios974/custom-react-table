import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"
import { sliceDataPage } from "../../reducer/tableReducer"
import styles from './style.module.css'

export default function TableRow() {
    
    const { columns, dataFiltered, numberOfEntriesPerPage, currentPage, customMessageNoData, classNametd, classNametdStriped } = useContext(TableContext)

    const currentDataPage = sliceDataPage(dataFiltered, numberOfEntriesPerPage, currentPage)

    return (
      <tbody>
        { 
            currentDataPage?.map((data, index) => (
                <tr
                    key={`${index}`}
                    className={`${styles.tr} ${index % 2 === 0 ? classNametdStriped : ''}`}
                >
                {
                columns.map((column, index) => (
                    <td 
                        key={`${column.name}-${index}`}
                        className={`${styles.td} ${classNametd}`}
                    >
                    {column.selector(data)}
                    </td>
                ))
                }
                </tr>
            ))
        }
        {
            currentDataPage?.length === 0 && <tr className={`${styles.tr}`} >
                <td className={`${styles.td}`} colSpan={columns.length}>{customMessageNoData}</td>
            </tr>
        }
      </tbody>
    )
  }