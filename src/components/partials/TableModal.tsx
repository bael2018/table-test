import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"
import { useInput } from "../../hooks/useInput"
import { apiUrl } from "../../constants/api"
import { useState } from "react"
import axios from "axios"

const TableModal = () => {
    const [tableData , setTableData] = useState<{content: string, id: number}[]>([])
    const { isModal } = useTypedSelector(state => state.tables)
    const [fieldAmount , setFieldAmount] = useState<number>(1)
    const inputValue = useInput('')
    const { setIsModal } = useActions()

    const tableModalFieldHandler = (): void => {
        if(inputValue.value.trim().length && tableData.length < 14){
            tableDataHandler()
            setFieldAmount(prev => prev + 1)
        }else if(tableData.length === 14){
            tableDataHandler()
        }else{
            alert("This field is required")
        }
    }

    // Для более сложных валидаций можно взять готовые решения,
    // по типу валидаторов или воспользоваться регулярными выражениями

    function tableDataHandler(){
        setTableData([...tableData, { id: fieldAmount, content: inputValue.value }])
        inputValue.clearValue()
    }

    const tableModalSubmitHandler = async () => {
        try {
            await axios.post(`${apiUrl}tables` , [...tableData])
            setFieldAmount(1)
            setTableData([])
        } catch ({ message }) {
            alert(message)
        }
    }

    return (
        <div className={`table-modal ${isModal && 'table-modal_visible'}`}>
            <div className="table-modal__wrapper">
                <button onClick={() => setIsModal(false)} className="table-modal__closer">X</button>
                <h3 className="table-modal__title">Add new fields</h3>
                <label className={`${tableData.length === 15 && 'disabled-label'}`} >
                    <input 
                        data-testid='table-input'
                        required
                        type="text" 
                        {...inputValue.bind()}
                    />
                    <span>Field #{fieldAmount}</span>
                </label>
                <div className="table-modal__buttons">
                    <button 
                        className={`${tableData.length === 15 && 'disabled-btn'}`} 
                        onClick={tableModalFieldHandler}
                    >
                        New field
                    </button>
                    <button 
                        className={`${tableData.length < 5 && 'disabled-btn'}`} 
                        onClick={tableModalSubmitHandler}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableModal