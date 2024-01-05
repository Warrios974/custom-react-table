import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"
import { sliceDataPage } from "../../reducer/tableReducer"
import styles from './style.module.css'

export default function TableRow() {
    
    const { columns, dataFiltered, numberOfEntriesPerPage, currentPage } = useContext(TableContext)

    const currentDataPage = sliceDataPage(dataFiltered, numberOfEntriesPerPage, currentPage)

    return (
      <tbody>
        { 
            currentDataPage?.map((data, index) => (
                <tr
                    key={`${index}`}
                    className={`${styles.tr} ${index % 2 === 0 && styles.background}`}
                >
                {
                columns.map((column, index) => (
                    <td 
                        key={`${column.name}-${index}`}
                        className={`${styles.td}`}
                    >
                    {column.selector(data)}
                    </td>
                ))
                }
                </tr>
            ))
        }
      </tbody>
    )
  }