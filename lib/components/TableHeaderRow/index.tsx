import { TableHeaderRowProps } from "../../types"


export default function TableHeaderRow<T>({ columns }: TableHeaderRowProps<T>) {
  return (
    <thead>
      <tr>
      {
        columns.map((column, index) => (
          <th 
            key={`${column.name}-${index}`}
          >
            {column.name}
          </th>
        ))
      }
      </tr>
    </thead>
  )
}