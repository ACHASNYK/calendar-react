
import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: 'date',
    initialState: {
      day: null,
      month: null,
      year: null,
      id: null,
      title:'',
      date:'',
      time:'',
      desc:'',
      created:'',
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
        },
        set_id: (state, action) => {
            state.id = action.payload;
        },
        set_title: (state, action) => {
            state.title = action.payload;
        },
        set_date: (state, action) => {
            state.date = action.payload;
        },
        set_desc: (state, action) => {
            state.desc = action.payload;
        },
        set_time: (state, action) => {
            state.time = action.payload;
        },
        set_created: (state, action) => {
            state.created = action.payload;
        },
        set_updated: (state, action) => {
            state.updated = action.payload;
        },
    },
});

export const { set_day, set_month, set_year, set_id, 
    set_title, set_created, set_desc, set_time, set_date, set_updated } = dateSlice.actions;
export default dateSlice.reducer;