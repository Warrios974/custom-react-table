import styles from './styles.module.css'
import { TableProps } from '../../types'
import { TableHeader } from '../TableHeader';
import TableHeaderRow from '../TableHeaderRow';
import TableRow from '../TableRow';

export function Table<T>(props: TableProps<T>) {

    const { title,
        className,
        classNameTable,
        classNameHeader,
        displaySearchBar,
        diplayEntries,
        classNameInput,
        columns,
        data} = props

        console.log(columns);
        console.log(data);
    
    
    return (
        <div className={`${className && className}`}>
            <TableHeader 
                title={title}
                className={classNameHeader}
                classNameInput={classNameInput}
                displaySearchBar={displaySearchBar}
                diplayEntries={diplayEntries}
            />
            <table
                className={`${styles.table} ${classNameTable}`}
            >
                <TableHeaderRow 
                    columns={columns}
                />
                <TableRow 
                    data={data}
                    columns={columns}
                />
            
            </table>
        </div>
    )
}