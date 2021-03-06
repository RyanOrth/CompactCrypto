import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import graphViewTableSlice from '../features/graphViewTable/graphViewTableSlice';
import sideTableSlice from '../features/sideTable/sideTableSlice';
import dropDownReducer from '../features/dropDown/dropDownSlice';
import navBarReducer from '../features/navBar/navBarSlice';
import tableViewTableSlice from '../features/tableViewTable/tableViewTableSlice';
import addRowButtonSlice from '../features/addRowInput/addRowButtonSlice';
import checkBoxItemReducer from '../features/checkBoxItem/checkBoxItemSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [sideTableSlice.name]: sideTableSlice.reducer,
    [graphViewTableSlice.name]: graphViewTableSlice.reducer,
    [tableViewTableSlice.name]: tableViewTableSlice.reducer,
    [addRowButtonSlice.name]: addRowButtonSlice.reducer,
    dropDown: dropDownReducer,
    navBar: navBarReducer,
    checkBoxItem: checkBoxItemReducer,

  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
