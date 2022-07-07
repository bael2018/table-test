import TableItem from "../elements/TableItem"
import { ITableItem } from "../../types"
import { FC } from "react"

interface ITableList {
    data: ITableItem[]
}

const TableList: FC<ITableList> = ({ data }) => {
    return (
        <div 
            style={{ gridTemplateColumns: `repeat(${data.length}, 200px)` }} 
            className={`table-list ${data.length > 5 && 'table-list_scroll'}`}
        >
            {
                data.map(({ id, content }) => <TableItem key={id + content} content={content}/>)
            }
        </div>
    )
}

export default TableList