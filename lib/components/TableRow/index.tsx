import { TableRowProps } from "../../types"

export default function TableRow<T>({ data, columns }: TableRowProps<T>) {
    return (
      <tbody>
        { 
            data.map((data, index) => (
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