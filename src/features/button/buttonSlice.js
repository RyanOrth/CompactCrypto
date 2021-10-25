import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const intitialState = {
  text: '',
  style: '',
  currentPage: '',
};

export const buttonSlice = createSlice({
  name: 'button',
  intitialState,
  reducers: {
    currentPage: (state) => {
      state.currentPage = 
    }
  }
});

export default buttonSlice.reducer;