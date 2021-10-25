import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  value: '',
};

export const dropDownSlice = createSlice({
  name: 'dropDown',
  initialState,

  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload;
    },    
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { updateItems, updateValue } = dropDownSlice.actions;

export const selectValue = (state) => state.dropDown.value;
export const selectItems = (state) => state.dropDown.items;

export default dropDownSlice.reducer;