import { createSlice } from "@reduxjs/toolkit";

const graphViewTableSlice = createSlice({
  name: "graphViewTable",
  initialState: {
    selectedCrypto : 'Bitcoin',
  },
  reducers: {
    changeCrypto: (graphViewTable, action) => {
      console.log(action.payload);
      graphViewTable.selectedCrypto = action.payload;
    },
  },
});

export default graphViewTableSlice;

export const { changeCrypto } = graphViewTableSlice.actions;

export function getSelectedCryto(state) {
  return state.graphViewTable.selectedCrypto;
}