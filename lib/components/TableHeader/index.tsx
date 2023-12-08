import styles from './styles.module.css'
import { SearchForm } from '../SearchForm'
import { SelectEntries } from '../SelectEntries'
import { useContext } from 'react'
import { TableContext } from '../../contexts/TableContext'

export function TableHeader() {

    const data = useContext(TableContext)

    return (
        <div
            className={`${styles.header} ${data.classNameHeader && data.classNameHeader}`}
        >
            <h2>{data.title}</h2>

            <div className={`${styles.filters}`}>
                {data.diplayEntries && <SelectEntries />}
                {data.displaySearchBar && <SearchForm />}
            </div>
        
        </div>
    )
}