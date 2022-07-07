import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"
import TableList from "./partials/TableList"
import Loader from "./elements/Loader"
import { FC, useEffect } from "react"

const Table: FC = () => {
    const { data, error, status, isFetching } = useTypedSelector(state => state.tables)
    const { tableThunk, setIsFetching } = useActions()

    useEffect(() => {
        if (isFetching) {
            tableThunk()
        }
    }, [isFetching]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);

        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    function scrollHandler(e: Event) {
        const document = e.target as Document

        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if (scrollHeight - (scrollTop + windowHeight) < 50) {
            setIsFetching(true)
        }
    }

    if(error){
        return (
            <div data-testid='error-message' className="error-handler">
                <h3>{error}</h3>
            </div>
        )
    }else{
        return (
            <div className="table">
                {
                    status ? <Loader/> : 
                    (
                        data.length ? 
                        (
                            data.map((table, index) => (
                                <div className="table__child" key={index}>
                                    <span 
                                        className={`table__child-order ${table.length > 5 && 'table__child-order_sized'}`}
                                    >
                                        {index + 1}
                                    </span>
                                    <TableList data={table} />
                                </div>
                            ))
                        ) : (
                            <h3 className="table__empty">No tables found</h3>
                        )
                    )
                }
            </div>
        )
    }
}

export default Table