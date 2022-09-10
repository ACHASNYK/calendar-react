
import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: 'date',
    initialState: {
      day: null,
      month: null,
      year: null
    },
    reducers: {
        set_day:(state,action) => {
            state.day = action.payload;
        },
        set_month:(state, action) => {
            state.month = action.payload;
        },
        set_year: (state, action) => {
            state.year = action.payload;
        }
    },
});

export const { set_day, set_month, set_year } = dateSlice.actions;
export default dateSlice.reducer;