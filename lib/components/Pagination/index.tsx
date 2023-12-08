import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"

export default function Pagination() {
  
  const { currentPage, numberOfPages, handleChangePageEntries } = useContext(TableContext)

  const handleChangePage = (page: number) => {
    handleChangePageEntries && handleChangePageEntries(page)
  }

  const paginate = (numberPage : number) => {
    const table: number[] = []
    for (let i = 0; i < numberPage; i++) {
      table.push(i + 1)
    }
    return table
  }

  return (
    <div>
      <button disabled={currentPage - 1 <= 0} onClick={() => handleChangePage(currentPage - 1)}>Previous</button>
      { paginate(numberOfPages).map((item, key) => (
        <button key={`${item}`} disabled={key + 1 === currentPage} onClick={() => handleChangePage(item)}>{item}</button>
      ))}
      <button disabled={currentPage + 1 > numberOfPages} onClick={() => handleChangePage(currentPage + 1)}>Next</button>
    </div>
  )
}