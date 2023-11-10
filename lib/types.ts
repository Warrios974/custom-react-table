export type TableColumn  = {
    name: string,
    selector: true
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

    columns: TableColumn,
    data: T[]
}

export type TableHeaderProps = {
    title?: string,
    className?: string,
    classNameInput?: string,
    displaySearchBar?: boolean,
    diplayEntries?: boolean,
}

export type TableHeaderRowProps = {
    columns: TableColumn
}
