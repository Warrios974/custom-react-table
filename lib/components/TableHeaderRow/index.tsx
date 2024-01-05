import { useContext, useState } from "react"
import { TableContext } from "../../contexts/TableContext"
import styles from './styles.module.css'
import chevronSVG from '../../assets/chevron-down.svg'
import { TheadProps } from "../../types"

export default function TableHeaderRow() {
  const { columns } = useContext(TableContext)

  return (
    <thead className={`${styles.tableHeader}`}>
      <tr>
        {columns.map((column, index) => (
          <Thead key={index} column={column} />
        ))}
      </tr>
    </thead>
  )
}

const Thead = ({column} : TheadProps) => {

  const { handleFilterByColumn, classNamethHeader } = useContext(TableContext)
  const [columnClicked, setColumnClicked] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC' |''>('')
  const handleClick = (columnKey: string) => {
    let newSortOrder = sortOrder

    if (columnClicked === columnKey) {
      if (sortOrder === 'ASC') {
        newSortOrder = 'DESC'
      } else if (sortOrder === 'DESC') {
        newSortOrder = ''
      } else {
        newSortOrder = 'ASC'
      }
    } else {
      newSortOrder = 'ASC'
    }

    handleFilterByColumn && handleFilterByColumn(columnKey, newSortOrder)
    setColumnClicked(columnKey)
    setSortOrder(newSortOrder)
  }
  
  return (
    <th 
      onClick={() => handleClick(column.key)}
      className={`${styles.th} ${classNamethHeader}`}
    >
      <span>{column.name}</span>
      <span>
        <img className={`${styles.chevron} ${sortOrder === "ASC" ? styles.down : '' } ${sortOrder === "DESC" ? styles.up : '' } ${sortOrder === "" ? styles.unactive : '' }`} src={chevronSVG} alt=""/>
      </span>
    </th>
  )
}