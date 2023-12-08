import { useContext, useState } from "react"
import { TableContext } from "../../contexts/TableContext"

export default function TableHeaderRow() {
  
  const { columns, handleFilterByColumn } = useContext(TableContext)

  const [columnClicked, setColumnClicked] = useState<string | null>(null)

  const handleClick = (columnKey: string) => {
    if (columnClicked === null) {

      handleFilterByColumn && handleFilterByColumn(columnKey, 'ASC')

      setColumnClicked(columnKey)
    }

    if (columnClicked === columnKey) {
          
        handleFilterByColumn && handleFilterByColumn(columnKey, 'DESC')
    }
    
    if (columnClicked !== columnKey) {
      
      handleFilterByColumn && handleFilterByColumn(columnKey, 'ASC')

      setColumnClicked(columnKey)
    }
    
  }

  return (
    <thead>
      <tr>
      {
        columns.map((column, index) => (
          <th 
            key={`${column.name}-${index}`}
            onClick={() => handleClick(column.key)}
          >
            {column.name}
          </th>
        ))
      }
      </tr>
    </thead>
  )
}