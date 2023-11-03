import React from 'react'
import styles from './styles.module.css'

type TableTypes = React.TableHTMLAttributes<HTMLTableElement>

export default function Table(props: TableTypes) {

    const { className, ...restProps } = props
    
    return (
        <table
            className={`${styles.table} ${className}`}
            {...restProps}
        >
            
            Table
        
        </table>
    )
}