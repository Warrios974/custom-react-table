import { useContext, useState } from "react";
import doubleChevronSVG from "../../assets/chevron-double.svg";
import chevronSVG from "../../assets/chevron-down.svg";
import { TableContext } from "../../contexts/TableContext";
import { TableLayoutProps, TheadProps } from "../../types";
import styles from "./styles.module.css";

export default function TableLayout({ children }: TableLayoutProps) {
  const { columns, diplayFooterRow } = useContext(TableContext);
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
      {diplayFooterRow && (
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

const Thead = ({ column, columnClicked, setColumnClicked }: TheadProps) => {
  const { handleFilterByColumn, classNamethHeader } = useContext(TableContext);

  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC" | "">("");

  const sortable = column.sortable === undefined ? true : column.sortable;

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
      className={`${styles.th} ${classNamethHeader} ${
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
