import styles from './styles.module.css'
import { TableHeaderProps } from '../../types'
import { SearchForm } from '../SearchForm'
import { SelectEntries } from '../SelectEntries'

export function TableHeader(props: TableHeaderProps) {

    const { title, className, displaySearchBar, diplayEntries } = props
    
    return (
        <div
            className={`${styles.header} ${className && className}`}
        >
            <h2>{title}</h2>

            <div>
                {diplayEntries && <SelectEntries />}
                {displaySearchBar && <SearchForm />}
            </div>
        
        </div>
    )
}