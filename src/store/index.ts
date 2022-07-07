import { configureStore } from "@reduxjs/toolkit";
import { rootSlice } from "./slices";
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: rootSlice,
    middleware: [thunk]
})