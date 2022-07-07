import * as tableThunk from "./thunk/tableThunk";
import todoSlice from "./slices/tableSlice";

export const tableActions = {
    ...tableThunk,
    ...todoSlice.actions
}