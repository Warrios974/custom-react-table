export type Primitive = string | number | boolean
export type Selector<T> = (row: T, rowIndex?: number) => Primitive

export type TableColumn<T>  = {
    name: string,
    selector: Selector<T>,
    sortable?: boolean,
}[]

export type TableProps<T> = {
    title?: string,
    className?: string,
    classNameTable?: string,
    classNameHeader?: string,
    classNameRow?: string,
    classNameInput?: string,
    displaySearchBar?: boolean,
    diplayEntries?: boolean,
    diplayFooterRow?: boolean,

    columns: TableColumn<T>,
    data: T[]
}

export type TableHeaderProps = {
    title?: string,
    className?: string,
    classNameInput?: string,
    displaySearchBar?: boolean,
    diplayEntries?: boolean,
}

export type TableHeaderRowProps<T> = {
    columns: TableColumn<T>,
}

export type TableRowProps<T> = {
    data: T[]
    columns: TableColumn<T>,
}
