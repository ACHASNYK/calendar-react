import { configureStore } from '@reduxjs/toolkit';
import dateReducer from './date'
const store = configureStore({
    reducer: {
        date: dateReducer,
    }
  })
  export default store;