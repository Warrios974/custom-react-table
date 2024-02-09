/**
 * Represents the table body component
 * @returns The table body component
 */
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { sliceDataPage } from "../../reducer/tableReducer";
import styles from "./style.module.css";

export default function TableRow() {
  const {
    columns,
    dataFiltered,
    numberOfEntriesPerPage,
    currentPage,
    customMessageNoData,
    classNameTd,
    classNameTdStriped,
  } = useContext(TableContext);

  const currentDataPage = sliceDataPage(
    dataFiltered,
    numberOfEntriesPerPage,
    currentPage
  );

  return (
    <tbody>
      {currentDataPage?.map((data, index) => (
        <tr
          key={`${index}`}
          className={`${styles.tr} ${
            index % 2 === 0 ? classNameTdStriped : ""
          }`}
        >
          {columns.map((column, index) => (
            <td
              key={`${column.name}-${index}`}
              className={`${styles.td} ${classNameTd}`}
            >
              {column.selector(data)}
            </td>
          ))}
        </tr>
      ))}
      {currentDataPage?.length === 0 && (
        <tr className={`${styles.tr}`}>
          <td
            className={`${styles.td} ${classNameTd}`}
            colSpan={columns.length}
          >
            {customMessageNoData}
          </td>
        </tr>
      )}
    </tbody>
  );
}
