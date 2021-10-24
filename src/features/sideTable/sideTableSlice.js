import { createSlice } from "@reduxjs/toolkit";

const sideTableSlice = createSlice({
  name: "sideTable",
  initialState: {
    selectedRow: -1,
  },
  reducers: {
    setSelectedRow: (sideTable, action) => {
      const { selectedRow } = action.payload;
      sideTable.selectedRow = selectedRow;
    },
  },
});

export default sideTableSlice;

export const { setSelectedRow } = sideTableSlice.actions;

export function getSelectedRow(state) {
  return state.sideTable.selectedRow;
}