/**
 * Represents a component that displays information about the current entries being shown in the table.
 * @returns A component that displays information about the current entries being shown in the table.
 */
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

export default function InfosEntries() {
  const {
    numberOfEntries,
    currentPage,
    numberOfEntriesPerPage,
    dataFiltered,
    displayInfoEntries,
  } = useContext(TableContext);

  // Calculate the start and end index of the entries being shown
  const startIndex = (currentPage - 1) * numberOfEntriesPerPage + 1;
  const endIndex = Math.min(
    startIndex + numberOfEntriesPerPage - 1,
    dataFiltered.length
  );

  return (
    <div
      style={{
        visibility: displayInfoEntries ? "visible" : "hidden",
      }}
    >
      Showing {startIndex} to {endIndex} of {numberOfEntries}
    </div>
  );
}
