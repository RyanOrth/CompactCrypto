import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import graphSlice from '../features/graph/graphSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [graphSlice.name]: graphSlice.reducer,
  },
});
