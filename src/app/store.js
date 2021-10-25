import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sideTableSlice from '../features/sideTable/sideTableSlice';
import dropDownReducer from '../features/dropDown/dropDownSlice';
import navBarReducer from '../features/navBar/navBarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [sideTableSlice.name]: sideTableSlice.reducer,
    dropDown: dropDownReducer,
    navBar: navBarReducer,
  },
});
