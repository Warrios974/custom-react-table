/**
 * @file TableContext.tsx
 * @description This file defines the context for the table component.
 * @date 29/07/2021
 */
import { createContext, useEffect, useReducer } from "react";
import { tableReducer } from "../reducer/tableReducer";
import { TableContextProviderProps, TableContextType } from "../types";

const defaultTableProps: TableContextType = {
  title: "",
  className: "",
  classNameTable: "",
  classNameHeader: "",
  classNameRow: "",
  classNameInput: "",
  displaySearchBar: true,
  displayEntries: true,
  displayFooterRow: true,
  displayInfoEntries: true,
  listOfNumbersOfEntries: [10, 25, 50, 100],
  numberOfEntriesPerPage: 10,
  currentPage: 1,
  numberOfPages: 1,
  columns: [],
  data: [],
  dataFiltered: [],
  currentPageData: [],
};

export const TableContext = createContext(defaultTableProps);

/**
 * Represents the table context provider component.
 * @param {TableContextProviderProps} props
 * @return Context provider component.
 */
const TableContextProvider = (props: TableContextProviderProps) => {
  const [state, dispatch] = useReducer(tableReducer, props);

  /**
   * Handle the filter by column action.
   * @param column | The column to filter.
   * @param sort | The sort to apply.
   */
  const handleFilterByColumn = (column: string, sort: string) => {
    dispatch({
      type: "FILTER_BY_COLUMN",
      payload: { column, sort },
    });
  };

  /**
   * Handle the search by keyword action.
   * @param payload | The keyword to search for.
   */
  const handleSearchByKeyword = (payload: string) => {
    dispatch({
      type: "SEARCH_BY_KEYWORD",
      payload,
    });
  };

  /**
   * Handle the change number of entries action.
   * @param payload | The number of entries to display.
   */
  const handleChangeNumberEntries = (payload: number) => {
    dispatch({
      type: "CHANGE_NUMBER_OF_ENTRIES",
      payload,
    });
  };

  /**
   * Handle the change page of entries action.
   * @param payload | The page to display.
   */
  const handleChangePageEntries = (payload: number) => {
    dispatch({
      type: "CHANGE_PAGE_OF_ENTRIES",
      payload,
    });
  };

  useEffect(() => {
    handleChangePageEntries(1);

    return () => {
      handleChangePageEntries(1);
    };
  }, []);

  const contextValue: TableContextProviderProps = {
    ...state,
    handleFilterByColumn,
    handleSearchByKeyword,
    handleChangeNumberEntries,
    handleChangePageEntries,
  };

  return (
    <TableContext.Provider value={contextValue}>
      {props.children}
    </TableContext.Provider>
  );
};
