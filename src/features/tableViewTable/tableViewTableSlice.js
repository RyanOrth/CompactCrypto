import { createSlice } from "@reduxjs/toolkit";

const tableViewTableSlice = createSlice({
  name: "tableViewTable",
  initialState: {
    favoriteList: [],
  },
  reducers: {
    setFavoriteList: (tableViewTable, action) => {
      const { favoriteList } = action.payload;
      tableViewTable.favoriteList = favoriteList;
    }
    // pushFavorite: (tableViewTable, action) => {
    //   const { favoriteItem } = action.payload;
    //   tableViewTable.favoriteList.add(favoriteItem);
    // },
    // popFavorite: (tableViewTable, action) => {
    //   const { removeItem } = action.payload;
    //   tableViewTable.favoriteList.delete(removeItem);
    // },
  },
});
export default tableViewTableSlice;

export const { setFavoriteList } = tableViewTableSlice.actions;
// export const { pushFavorite, popFavorite } = tableViewTableSlice.actions;

export function getFavoriteList(state) {
  // console.log(typeof state.tableViewTable.favoriteList);
  return state.tableViewTable.favoriteList;
}