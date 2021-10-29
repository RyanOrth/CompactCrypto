import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATA_VIEW } from '../constants/action-types';
import { NavBar } from '../features/navBar/NavBar.js';
import {
  selectCurrentPage, updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar
} from '../features/navBar/navBarSlice';
import { TableViewTable } from '../features/tableViewTable/tableViewTable';
import './screenCSS/tableView.css';




const DataView = () => {
  var currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(DATA_VIEW));
  dispatch(updateDisplayFilterOptions(true));
  dispatch(updateDisplaySearchBar(true));

  return (
    <div>
      <NavBar currentPage={DATA_VIEW} displayFilterOptions={false} displayGraphOptions={false} displaySearchBar={false} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '10vh'
        }}
      >
        <h1>Data View</h1>
      </div>
      <div style={{
        margin: 'auto',
      }}>
        <TableViewTable />
      </div>
    </div>
  );
};

export default DataView;