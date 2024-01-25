/**
 * @file types.ts
 * @description Types for custom-react-table
 * @license MIT
 * @version 0.0.7
 * @since 0.0.1
 */
import { PropsWithChildren } from "react";

export type Primitive = string | number | boolean;
export type Selector = (row: TableData, rowIndex?: number) => Primitive;

/**
 * Data types
 * @typedef {Object} TableData
 * @property {string} id - The id of the row
 * @property {string} [key] - The key of the row
 */
export type TableData = {
  id: string;
  [key: string]: string;
};

/**
 * Column types
 * @typedef {Object} TableColumn
 * @property {string} name - The name of the column
 * @property {string} key - The key of the column
 * @property {Selector} selector - The selector of the column
 * @property {boolean} sortable - The selector of the column
 */
export type TableColumn = {
  name: string;
  key: string;
  selector: Selector;
  sortable?: boolean;
};

/**
 * Component types
 */
export type TableProps = {
  title?: string;
  className?: string;
  classNameTable?: string;
  classNameHeader?: string;
  classNameRow?: string;
  classNameInput?: string;
  classNameThHeader?: string;
  classNameThFooter?: string;
  classNameTdStriped?: string;
  classNameTd?: string;
  classNameBtnNumber?: string;
  classNameBtnNextAndPrevious?: string;
  customMessageNoData?: string;
  displaySearchBar?: boolean;
  displayEntries?: boolean;
  displayFooterRow?: boolean;
  displayInfoEntries?: boolean;
  listOfNumbersOfEntries?: number[];
  numberOfEntries?: number;
  columns: TableColumn[];
  data: TableData[];
};

export type TableHeaderProps = {
  title?: string;
  className?: string;
  classNameInput?: string;
  displaySearchBar?: boolean;
  displayEntries?: boolean;
  listOfNumbersOfEntries?: number[];
};

export type TableFooterProps = {
  className?: string;
  classNameInput?: string;
  displayInfoEntries?: boolean;
  numberOfEntries: number;
};

export type TableLayoutProps = PropsWithChildren;

export type TableRowProps = {
  data: TableData[];
  columns: TableColumn[];
};

export type InfosEntriesProps = {
  listOfNumbersOfEntries: number[];
};

export type TheadProps = {
  column: TableColumn;
  columnClicked: string | null;
  setColumnClicked: (column: string) => void;
};

/**
 * Reducer types
 */
export type ActionString =
  | "FILTER_BY_COLUMN"
  | "SEARCH_BY_KEYWORD"
  | "CHANGE_NUMBER_OF_ENTRIES"
  | "CHANGE_PAGE_OF_ENTRIES";

export type FILTER_BY_COLUMN_ACTION = {
  type: "FILTER_BY_COLUMN";
  payload: { column: string; sort: string };
};

export type SEARCH_BY_KEYWORD_ACTION = {
  type: "SEARCH_BY_KEYWORD";
  payload: string;
};

export type CHANGE_NUMBER_OF_ENTRIES_ACTION = {
  type: "CHANGE_NUMBER_OF_ENTRIES";
  payload: number;
};

export type CHANGE_PAGE_OF_ENTRIES_ACTION = {
  type: "CHANGE_PAGE_OF_ENTRIES";
  payload: number;
};

export type Action =
  | FILTER_BY_COLUMN_ACTION
  | SEARCH_BY_KEYWORD_ACTION
  | CHANGE_NUMBER_OF_ENTRIES_ACTION
  | CHANGE_PAGE_OF_ENTRIES_ACTION;

/**
 * Context types
 */
export type TableContextType = TableProps & {
  numberOfEntriesPerPage: number;
  currentPage: number;
  dataFiltered: TableData[];
  numberOfPages: number;
  currentPageData?: TableData[];
  handleFilterByColumn?: (column: string, sort: string) => void;
  handleSearchByKeyword?: (keyword: string) => void;
  handleChangeNumberEntries?: (number: number) => void;
  handleChangePageEntries?: (page: number) => void;
};

export type TableContextProviderProps = TableContextType & PropsWithChildren;
