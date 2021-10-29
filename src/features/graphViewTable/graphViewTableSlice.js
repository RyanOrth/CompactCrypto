import { createSlice } from "@reduxjs/toolkit";

const graphViewTableSlice = createSlice({
  name: "graphViewTable",
  initialState: {
    visibleRows : ['Binance Coin', 'Bitcoin'],
  },
  reducers: {
    updateVisibleRows: (graphViewTable, action) => {
      graphViewTable.visibleRows = action.payload;
    },
  },
});

export default graphViewTableSlice;

export const { updateVisibleRows } = graphViewTableSlice.actions;

export function getVisibleRows(state) {
  return state.graphViewTable.visibleRows;
}