import { 
    setIsFetching, 
    setTablesPage, 
    setTablesTotalCount, 
    tablesFulfilled, 
    tablesPending, 
    tablesRejected 
} from '../slices/tableSlice';
import { apiUrl } from '../../constants/api';
import { Dispatch } from '@reduxjs/toolkit';
import { store } from '..';
import axios from 'axios'
import { ITableItem } from '../../types';

export const tableThunk = () => async (dispatch: Dispatch, getState: typeof store.getState) => {
    const { page, data } = getState().tables

    try {
        if (data.length === 0) {
            dispatch(tablesPending())
        }

        const response = await axios.get<ITableItem[][]>(`${apiUrl}tables?_limit=8&_page=${page}`)
        const totalCount = response.headers["x-total-count"];

        if (data.length < +totalCount) {
            dispatch(tablesFulfilled(response.data));
            dispatch(setTablesPage(page + 1));
            dispatch(setTablesTotalCount(+totalCount));
            dispatch(setIsFetching(false));
        }
    } catch ({ message }) {
        dispatch(tablesRejected({ error: message }))
    }
};
