import {
  Action,
  TableColumn,
  TableContextProviderProps,
  TableData,
} from "../types";

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

const filterbyKeyword = (
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
      const keyword = filterbyKeyword(data, action.payload, state.columns);
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
