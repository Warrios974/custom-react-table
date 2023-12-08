import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"
import { sliceDataPage } from "../../reducer/tableReducer"

export default function TableRow() {
    
    const { columns, dataFiltered, numberOfEntriesPerPage, currentPage } = useContext(TableContext)

    const currentDataPage = sliceDataPage(dataFiltered, numberOfEntriesPerPage, currentPage)

    return (
      <tbody>
        { 
            currentDataPage?.map((data, index) => (
                <tr
                    key={`${index}`}
                >
                {
                columns.map((column, index) => (
                    <td 
                        key={`${column.name}-${index}`}
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