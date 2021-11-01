import { createSlice } from "@reduxjs/toolkit";

const graphViewTableSlice = createSlice({
  name: "graphViewTable",
  initialState: {
    selectedCrypto: 'Bitcoin',
    selectedToken: 'BTC',
  },
  reducers: {
    changeCrypto: (graphViewTable, action) => {
      graphViewTable.selectedCrypto = action.payload;
    },
    changeToken: (graphViewTable, action) => {
      graphViewTable.selectedToken = action.payload;
    }
  },
});

export default graphViewTableSlice;

export const { changeCrypto, changeToken } = graphViewTableSlice.actions;

export function getSelectedCryto(state) {
  return state.graphViewTable.selectedCrypto;
}

export function getGraphViewToken(state) {
  return state.graphViewTable.selectedToken;
}