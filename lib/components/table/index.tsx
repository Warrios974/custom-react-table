import { TableProps } from '../../types'
import { TableHeader } from '../TableHeader';
import TableRow from '../TableRow';
import TableFooter from '../TableFooter';
import { TableContextProvider } from '../../contexts/TableContext';
import styles from './styles.module.css'
import TableLayout from '../TableLayout/TableLayout';

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
        'classNametdStriped': props.classNametdStriped,
        'classNameBtnNumber': props.classNameBtnNumber,
        'classNameBtnNextAndPrevious': props.classNameBtnNextAndPrevious,
        'customMessageNoData': props.customMessageNoData || 'No data found',
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

    return (
        <TableContextProvider 
            {...initialContextValue}
            >
            <TableHeader />
            <div className={`${styles.responsiveContainer}`}>
            <TableLayout>
                <TableRow />
            </TableLayout>
            </div>
            <TableFooter />
        </TableContextProvider>
    )
}