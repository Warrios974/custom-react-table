import { useContext } from "react"
import { TableContext } from "../../contexts/TableContext"

export default function InfosEntries() {

  const { numberOfEntries, currentPage, numberOfEntriesPerPage, dataFiltered } = useContext(TableContext)

  const startIndex = (currentPage - 1) * numberOfEntriesPerPage + 1;
  const endIndex = Math.min(startIndex + numberOfEntriesPerPage - 1, dataFiltered.length);

  return (
    <div>
        Showing {startIndex} to {endIndex} of {numberOfEntries}
    </div>
  )
}