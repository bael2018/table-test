import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITableItem } from "../../types"

interface IInitialState {
    data: ITableItem[][],
    status: boolean,
    error: string,
    isFetching: boolean,
    totalCount: number,
    page: number,
    isModal: boolean
}

const initialState: IInitialState = {
    data: [],
    error: '',
    status: false,
    isFetching: true,
    page: 1,
    totalCount: 0,
    isModal: false
}

const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        tablesPending: (state): void => {
            state.status = true;
        },
        tablesFulfilled: (state, action: PayloadAction<ITableItem[][]>): void => {
            state.status = false;
            state.data = [...state.data, ...action.payload];
        },
        tablesRejected: (state, action): void => {
            state.status = false;
            state.error = action.payload;
        },
        setTablesTotalCount: (state, action: PayloadAction<number>): void => {
            state.totalCount = action.payload;
        },
        setTablesPage: (state, action: PayloadAction<number>): void => {
            state.page = action.payload;
        },
        setIsFetching: (state, action: PayloadAction<boolean>): void => {
            state.isFetching = action.payload
        },
        setIsModal: (state, action: PayloadAction<boolean>): void => {
            state.isModal = action.payload
        }
    },
})

export const { 
    tablesFulfilled,
    tablesPending,
    tablesRejected,
    setIsFetching, 
    setTablesPage, 
    setTablesTotalCount,
    setIsModal
} = tableSlice.actions
export default tableSlice