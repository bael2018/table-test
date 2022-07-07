import { combineReducers } from "@reduxjs/toolkit";
import tableSlice from "./tableSlice";

export const rootSlice = combineReducers({
    tables: tableSlice.reducer
})

export type RootState = ReturnType<typeof rootSlice>