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

export const TableContextProvider = (props: TableContextProviderProps) => {
  const [state, dispatch] = useReducer(tableReducer, props);

  const handleFilterByColumn = (column: string, sort: string) => {
    dispatch({
      type: "FILTER_BY_COLUMN",
      payload: { column, sort },
    });
  };

  const handleSearchByKeyword = (payload: string) => {
    dispatch({
      type: "SEARCH_BY_KEYWORD",
      payload,
    });
  };

  const handleChangeNumberEntries = (payload: number) => {
    dispatch({
      type: "CHANGE_NUMBER_OF_ENTRIES",
      payload,
    });
  };

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
