import { bindActionCreators } from "@reduxjs/toolkit"
import { tableActions } from "../store/actions"
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(tableActions, dispatch)
}