import { TableProps } from '../../types'
import { TableHeader } from '../TableHeader';
import TableHeaderRow from '../TableHeaderRow';
import TableRow from '../TableRow';
import TableFooterRow from '../TableFooterRow';
import TableFooter from '../TableFooter';
import { TableContextProvider } from '../../contexts/TableContext';
import styles from './styles.module.css'

export function Table(props: TableProps) {
    
    const listOfNumbersOfEntries = props.listOfNumbersOfEntries || [10, 25, 50, 100]

    const initialContextValue = { 
        'title': props.title,
        'className': props.className,
        'classNameTable': props.classNameTable,
        'classNameHeader': props.classNameHeader,
        'displaySearchBar': props.displaySearchBar,
        'diplayEntries': props.diplayEntries,
        'diplayFooterRow': props.diplayFooterRow,
        'classNameInput': props.classNameInput,
        'displayInfoEntries': props.displayInfoEntries,
        'listOfNumbersOfEntries': listOfNumbersOfEntries,
        'numberOfEntries': props.data.length,
        'columns': props.columns,
        'data': props.data,
        'numberOfPages': Math.ceil(props.data.length / listOfNumbersOfEntries[0] || 10),
        'numberOfEntriesPerPage': listOfNumbersOfEntries[0],
        'currentPage': 1,
        'dataFiltered': props.data,
    }

    //https://stackoverflow.com/questions/42761068/paginate-javascript-array

    return (
        <TableContextProvider 
            {...initialContextValue}
            >
            <div className={``}>
                <TableHeader />
                <table className={`${styles.table}`}>
                    <TableHeaderRow />
                    <TableRow />
                    <TableFooterRow />
                </table>
                <TableFooter />
            </div>
        </TableContextProvider>
    )
}