import { createSlice } from "@reduxjs/toolkit";

const graphViewTableSlice = createSlice({
  name: "graphViewTable",
  initialState: {
    visibleRows : ['Binance Coin', 'Bitcoin'],
  },
  reducers: {
    updateVisibleRows: (graphViewTable, action) => {
      const { visibleRows } = action.payload;
      console.log('payload:', action.payload);
      graphViewTable.visibleRows = visibleRows;
    },
  },
});

export default graphViewTableSlice;

export const { updateVisibleRows } = graphViewTableSlice.actions;

export function getVisibleRows(state) {
  console.log(state.graphViewTable.visibleRows)
  return state.graphViewTable.visibleRows;
}