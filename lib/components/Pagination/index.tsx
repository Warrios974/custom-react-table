/**
 * Represents a pagination component.
 * @returns A pagination component.
 */
import { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import styles from "./style.module.css";

export default function Pagination() {
  const {
    currentPage,
    numberOfPages,
    handleChangePageEntries,
    classNameBtnNextAndPrevious,
    classNameBtnNumber,
  } = useContext(TableContext);

  /**
   * Handles the change page action.
   * @param page - The page to change to.
   */
  const handleChangePage = (page: number) => {
    handleChangePageEntries && handleChangePageEntries(page);
  };

  /**
   * Generates the page numbers to display.
   * @returns The page numbers to display.
   */
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    const maxPages = Math.min(5, numberOfPages); // Maximum number of pages to display

    if (numberOfPages <= maxPages) {
      // If total number of pages is less than or equal to maxPages
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= Math.ceil(maxPages / 2)) {
        // If current page is less than or equal to half of maxPages
        for (let i = 1; i <= maxPages - 1; i++) {
          pages.push(i);
        }
        pages.push("...", numberOfPages);
      } else if (currentPage >= numberOfPages - Math.floor(maxPages / 2)) {
        // If current page is greater than or equal to numberOfPages minus half of maxPages
        pages.push(1, "...");
        for (let i = numberOfPages - maxPages + 2; i <= numberOfPages; i++) {
          pages.push(i);
        }
      } else {
        // If current page is in the middle
        const start = Math.max(2, currentPage - Math.floor((maxPages - 3) / 2));
        const end = Math.min(numberOfPages - 1, start + maxPages - 3);

        pages.push(1, "...");
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        pages.push("...", numberOfPages);
      }
    }

    return pages;
  };

  return (
    <div>
      <button
        disabled={currentPage <= 1}
        onClick={() => handleChangePage(currentPage - 1)}
        className={`${styles.cursor} ${classNameBtnNextAndPrevious}`}
      >
        Previous
      </button>

      {generatePageNumbers().map((item, key) =>
        item !== "..." ? (
          <button
            key={key}
            disabled={item === currentPage}
            onClick={() => handleChangePage(item as number)}
            className={`${styles.cursor} ${classNameBtnNumber}`}
          >
            {item}
          </button>
        ) : (
          <span className={styles.suspension} key={key}>
            ...
          </span>
        )
      )}

      <button
        disabled={currentPage >= numberOfPages}
        onClick={() => handleChangePage(currentPage + 1)}
        className={`${styles.cursor} ${classNameBtnNextAndPrevious}`}
      >
        Next
      </button>
    </div>
  );
}
