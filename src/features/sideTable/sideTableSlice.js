import { createSlice } from "@reduxjs/toolkit";

const sideTableSlice = createSlice({
  name: "sideTable",
  initialState: {
    selectedRow: '1',
    selectedToken: 'BTC'
  },
  reducers: {
    setSelectedRow: (sideTable, action) => {
      const { selectedRow } = action.payload;
      sideTable.selectedRow = selectedRow;
    },
    setSelectedToken: (sideTable, action) => {
      const { selectedToken } = action.payload;
      sideTable.selectedToken = selectedToken;
    }
  },
});

export default sideTableSlice;

export const { setSelectedRow, setSelectedToken } = sideTableSlice.actions;

export function getSelectedRow(state) {
  return state.sideTable.selectedRow;
}
export function getSelectedToken(state) {
  return state.sideTable.selectedToken;
}