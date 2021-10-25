import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  value: '',
};

export const viewDropDownMenuSlice = createSlice({
  name: 'viewDropDownMenu',
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

export const { updateItems, updateValue } = viewDropDownMenuSlice.actions;

export const selectValue = (state) => state.viewDropDownMenu.value;
export const selectItems = (state) => state.viewDropDownMenu.items;

export default viewDropDownMenuSlice.reducer;