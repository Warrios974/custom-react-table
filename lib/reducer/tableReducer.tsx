/**
 * @file tableReducer.tsx
 * @description This file defines the reducer for the table component.
 * @date 29/07/2021
 */
import {
  Action,
  TableColumn,
  TableContextProviderProps,
  TableData,
} from "../types";

/**
 * Sort the data by column.
 * This function is used to sort the data by column.
 * @param {TableData[]} data
 * @param {string} column
 * @param {string} sort
 * @return {TableData[]} The sorted data.
 */
const sortDataColumns = (data: TableData[], column: string, sort: string) => {
  if (sort === "") return data;

  const sortData = data.sort((a, b) => {
    if (a[column] < b[column]) {
      return -1;
    }
    if (a[column] > b[column]) {
      return 1;
    }
    return 0;
  });

  return sort === "ASC" ? sortData : sortData.reverse();
};

/**
 * Filter the data by keyword.
 * This function is used to filter the data by keyword.
 * @param {TableData[]} data
 * @param {string} keyword
 * @param {TableColumn[]} columns
 * @return {TableData[]} The filtered data.
 */
const filterByKeyword = (
  data: TableData[],
  keyword: string,
  columns: TableColumn[]
) => {
  if (keyword === "") return data;

  if (columns.length > 0) {
    const sortData = data.filter((item) => {
      let isInclude = false;
      columns.forEach((column) => {
        if (item[column.key].toLowerCase().includes(keyword.toLowerCase())) {
          isInclude = true;
        }
      });
      return isInclude;
    });
    return sortData;
  }

  return data;
};

/**
 * Slice the data by page.
 * This function is used to slice the data by page.
 * @param {TableData[]} data
 * @param {number} numberOfEntriesPerPage
 * @param {number} currentPage
 * @return {TableData[]} The sliced data.
 */
export const sliceDataPage = (
  data: TableData[],
  numberOfEntriesPerPage: number,
  currentPage: number
): TableData[] => {
  return data.slice(
    (currentPage - 1) * numberOfEntriesPerPage,
    currentPage * numberOfEntriesPerPage
  );
};

/**
 * Represents the table reducer.
 * This function is used to handle the actions.
 * FILTER_BY_COLUMN | Filter the data by column.
 * SEARCH_BY_KEYWORD | Filter the data by keyword.
 * CHANGE_NUMBER_OF_ENTRIES | Change the number of entries to display.
 * CHANGE_PAGE_OF_ENTRIES | Change the page to display.
 * @param {TableContextProviderProps} state
 * @param {Action} action
 * @return {TableContextProviderProps} The new state.
 */
export function tableReducer(state: TableContextProviderProps, action: Action) {
  const data = JSON.parse(JSON.stringify(state.data));

  switch (action.type) {
    case "FILTER_BY_COLUMN": {
      return {
        ...state,
        dataFiltered: sortDataColumns(
          data,
          action.payload.column ? action.payload.column : "firstName",
          action.payload.sort
        ),
      };
    }
    case "SEARCH_BY_KEYWORD": {
      const keyword = filterByKeyword(data, action.payload, state.columns);
      return {
        ...state,
        dataFiltered: keyword,
        numberOfPages: Math.ceil(keyword.length / state.numberOfEntriesPerPage),
        numberOfEntries: keyword.length,
      };
    }
    case "CHANGE_NUMBER_OF_ENTRIES": {
      return {
        ...state,
        numberOfEntriesPerPage: action.payload,
        numberOfPages: Math.ceil(state.dataFiltered.length / action.payload),
        currentPage: 1,
      };
    }
    case "CHANGE_PAGE_OF_ENTRIES": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default:
      throw new Error();
  }
}
