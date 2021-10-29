import { createSlice } from "@reduxjs/toolkit";

const addRowButtonSlice = createSlice({
  name: "addRowButton",
  initialState: {
    isVisible : false,
  },
  reducers: {
    toggleVisibility: (addRowButton, action) => {
      addRowButton.isVisible = action.payload;
    },
  },
});

export default addRowButtonSlice;

export const { toggleVisibility } = addRowButtonSlice.actions;

export function getVisibility(state) {
  console.log('isVisible: ', state.addRowButton.isVisible)
  return state.addRowButton.isVisible;
}

export const selectVisibility = (state) => state.addRowButton.isVisible;
