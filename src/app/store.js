import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import viewDropDownMenuReducer from '../features/viewDropDownMenu/viewDropDownMenuSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    viewDropDownMenu: viewDropDownMenuReducer,
  },
});
