import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import graphViewTableSlice from '../features/graphViewTable/graphViewTableSlice';
import sideTableSlice from '../features/sideTable/sideTableSlice';
import dropDownReducer from '../features/dropDown/dropDownSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [sideTableSlice.name]: sideTableSlice.reducer,
    [graphViewTableSlice.name]: graphViewTableSlice.reducer,
    dropDown: dropDownReducer,
  },
});
