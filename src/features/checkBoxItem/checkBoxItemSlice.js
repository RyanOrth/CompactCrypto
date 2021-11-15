import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxChecked: false,
  item: '',
  options: [false, false, false],
};

export const checkBoxItemSlice = createSlice({
  name: 'checkBoxItem',
  initialState,

  reducers: {
    updateBoxChecked: (state, action) => {
      state.boxChecked = action.payload;
    },
    updateOptions: (state, action) => {
      state.options = action.payload;
    },
    updateItem: (state, action) => {
      state.item = action.payload;
    },
  }
});

export const { updateBoxChecked, updateItem, updateOptions } = checkBoxItemSlice.actions;

export const selectBoxChecked = (state) => state.checkBoxItem.boxChecked;
export const selectItem = (state) => state.checkBoxItem.item;
export const selectOptions = (state) => state.checkBoxItem.options;

export default checkBoxItemSlice.reducer;