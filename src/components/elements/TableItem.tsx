import { FC } from "react"

const TableItem: FC<{ content: string }> = ({ content }) => {
    return (
        <div className="table-item">
            {content}
        </div>
    )
}

export default TableItem