import React from 'react';
import { DATA_VIEW } from '../constants/action-types';
import { TableViewTable } from '../features/tableViewTable/tableViewTable';

import { NavBar } from '../features/navBar/NavBar';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentPage,
  selectDisplayFilterOptions,
  selectDisplaySearchBar,
  updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar,
} from '../features/navBar/navBarSlice';

const DataView = () => {
  var currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(DATA_VIEW));
  dispatch(updateDisplayFilterOptions(true));
  dispatch(updateDisplaySearchBar(true));

  return (
    <div>
      <NavBar currentPage={DATA_VIEW} displayFilterOptions={false} displaySearchBar={false} />
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