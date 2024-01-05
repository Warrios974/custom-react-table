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
        'classNameInput': props.classNameInput,
        'classNamethHeader': props.classNamethHeader,
        'classNamethFooter': props.classNamethFooter,
        'classNametd': props.classNametd,
        'classNameBtnNumber': props.classNameBtnNumber,
        'classNameBtnNextAndPrevious': props.classNameBtnNextAndPrevious,
        
        'displaySearchBar': props.displaySearchBar,
        'diplayEntries': props.diplayEntries,
        'diplayFooterRow': props.diplayFooterRow,
        'displayInfoEntries': props.displayInfoEntries,
        'listOfNumbersOfEntries': listOfNumbersOfEntries,
        'numberOfEntries': props.data.length,
        'columns': props.columns,
        'data': props.data,
        'numberOfPages': Math.ceil(props.data.length / listOfNumbersOfEntries[0] || 0),
        'numberOfEntriesPerPage': listOfNumbersOfEntries[0],
        'currentPage': 1,
        'dataFiltered': JSON.parse(JSON.stringify(props.data)),
    }

    console.log('initialContextValue', initialContextValue.numberOfPages)

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