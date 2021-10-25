import { createSlice } from "@reduxjs/toolkit";

const graphViewTableSlice = createSlice({
  name: "graphViewTable",
  initialState: {
    visibleRows : [],
  },
  reducers: {
    setSelectedRow: (sideTable, action) => {
      const { selectedRow } = action.payload;
      sideTable.selectedRow = selectedRow;
    },
  },
});

export default graphViewTableSlice;

export const { setSelectedRow } = graphViewTableSlice.actions;

export function getSelectedRow(state) {
  return state.sideTable.selectedRow;
}