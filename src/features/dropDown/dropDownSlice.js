import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  value: '',
  defaultTitle: '',
};

export const dropDownSlice = createSlice({
  name: 'dropDown',
  initialState,

  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    updateDefaultTitle: (state, action) => {
      state.defaultTitle = action.payload;
    },
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { updateItems, updateDefaultTitle, updateValue } = dropDownSlice.actions;

export const selectValue = (state) => state.dropDown.value;
export const selectItems = (state) => state.dropDown.items;
export const selectDefaultTitle = (state) => state.dropDown.defaultTitle;

export default dropDownSlice.reducer;