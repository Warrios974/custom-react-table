/**
 * Represents a table layout component.
 * @param children - The children of the component (tbody).
 * @returns A table layout component.
 */
import { useContext, useState } from "react";
import doubleChevronSVG from "../../assets/chevron-double.svg";
import chevronSVG from "../../assets/chevron-down.svg";
import { TableContext } from "../../contexts/TableContext";
import { TableLayoutProps, TheadProps } from "../../types";
import styles from "./styles.module.css";

export default function TableLayout({ children }: TableLayoutProps) {
  const { columns, displayFooterRow } = useContext(TableContext);
  const [columnClicked, setColumnClicked] = useState<string | null>(null);

  return (
    <table className={styles.table}>
      <thead className={`${styles.tableHeader}`}>
        <tr>
          {columns.map((column, index) => (
            <Thead
              key={index}
              column={column}
              columnClicked={columnClicked}
              setColumnClicked={setColumnClicked}
            />
          ))}
        </tr>
      </thead>
      {children}
      {displayFooterRow && (
        <tfoot className={`${styles.tableFooter}`}>
          <tr>
            {columns.map((column, index) => (
              <Thead
                key={index}
                column={column}
                columnClicked={columnClicked}
                setColumnClicked={setColumnClicked}
              />
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
}

/**
 * Represents a table header component.
 * @param column - The column to display.
 * @param columnClicked - The column clicked.
 * @param setColumnClicked - The function to set the column clicked.
 * @typedef TheadProps
 * @returns A table header component.
 */
const Thead = ({ column, columnClicked, setColumnClicked }: TheadProps) => {
  const { handleFilterByColumn, classNameThHeader } = useContext(TableContext);

  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC" | "">("");

  const sortable = column.sortable === undefined ? true : column.sortable;

  /**
   * Handles the click on the column header.
   * If the column is sortable, it will sort the data by the column clicked.
   * If the column is not sortable, it will do nothing.
   * If the column is already sorted, it will change the sort order.
   * If the column is not sorted, it will sort the data in ascending order.
   * @param columnKey
   * @returns
   */
  const handleClick = (columnKey: string) => {
    if (!sortable) return;

    let newSortOrder = sortOrder;

    if (columnClicked === columnKey) {
      if (sortOrder === "ASC") {
        newSortOrder = "DESC";
      } else if (sortOrder === "DESC") {
        newSortOrder = "";
      } else {
        newSortOrder = "ASC";
      }
    } else {
      newSortOrder = "ASC";
    }

    handleFilterByColumn && handleFilterByColumn(columnKey, newSortOrder);
    setColumnClicked(columnKey);
    setSortOrder(newSortOrder);
  };

  return (
    <th
      onClick={() => handleClick(column.key)}
      className={`${styles.th} ${classNameThHeader} ${
        sortable ? styles.sortable : ""
      }`}
    >
      <span>{column.name}</span>
      {sortable && (
        <span>
          <img
            className={`${styles.chevron} ${
              sortOrder === "ASC" ? styles.down : ""
            } ${sortOrder === "DESC" ? styles.up : ""} ${
              sortOrder === "" || columnClicked !== column.key
                ? styles.hidden
                : ""
            }`}
            src={chevronSVG}
            alt=""
          />
          <img
            className={`${styles.chevron} ${styles.doubleChevron} ${
              sortOrder === "" ? "" : styles.hidden
            }`}
            src={doubleChevronSVG}
            alt=""
          />
        </span>
      )}
    </th>
  );
};
