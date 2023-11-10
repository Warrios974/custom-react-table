import { TableHeaderRowProps } from "../../types"


export default function TableHeaderRow({ columns }: TableHeaderRowProps) {
  return (
    <thead>
      {
        columns.map((column, index) => (
          <th 
            key={`${column.name}-${index}`}
          >
            {column.name}
          </th>
        ))
      }
    </thead>
  )
}