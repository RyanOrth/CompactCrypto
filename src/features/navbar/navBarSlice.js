import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  COMPACT_VIEW,
  DATA_VIEW,
  GRAPH_VIEW,
  ACCOUNT_VIEW,
} from "../../constants/action-types";

const initialState = {
  currentPage: COMPACT_VIEW,
  displayFilterOptions: false,
  displayGraphOptions: false,
  displaySearchBar: false,
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,

  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateDisplayFilterOptions: (state, action) => {
      state.displayFilterOptions = action.payload;
    },
    updateDisplayGraphOptions: (state, action) => {
      state.displayGraphOptions = action.payload;
    },
    updateDisplaySearchBar: (state, action) => {
      state.displaySearchBar = action.payload;
    },
  }
});

export const { updateCurrentPage, updateDisplayFilterOptions, updateDisplayGraphOptions, updateDisplaySearchBar } = navBarSlice.actions;

export const selectCurrentPage = (state) => state.navBar.currentPage;
export const selectDisplayFilterOptions = (state) => state.navBar.displayFilterOptions;
export const selectDisplayGraphOptions = (state) => state.navBar.displayGraphOptions;
export const selectDisplaySearchBar = (state) => state.navBar.displaySearchBar;

export default navBarSlice.reducer;