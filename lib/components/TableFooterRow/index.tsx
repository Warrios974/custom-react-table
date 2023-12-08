import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"

export default function TableFooterRow() {
  
  const dataContext = useContext(TableContext)
  
  if(dataContext.diplayFooterRow) return (
    <tfoot>
      <tr>
      {
        dataContext.columns.map((column, index) => (
          <th 
            key={`${column.name}-${index}`}
          >
            {column.name}
          </th>
        ))
      }
      </tr>
    </tfoot>
  )
}