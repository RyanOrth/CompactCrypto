import React from 'react';
import { GRAPH_VIEW } from '../constants/action-types';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { GraphViewTable } from '../features/graphViewTable/GraphViewTable';
import { AddRowButton } from '../features/addRowInput/addRowButton';
import './screenCSS/graphView.css';

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

const GraphView = () => {
  var currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(GRAPH_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplaySearchBar(true));

  return (
    <div>
      <NavBar currentPage={GRAPH_VIEW} displayFilterOptions={false} displaySearchBar={false} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        <div>
          <div id={'tbbl'} style={{ overflow: 'hidden', float: 'left', height: '274px', border: '1px solid #ddd' }}>
          <GraphViewTable />
          </div>
          <div>
            <AddRowButton/>
          </div>
        </div>
        <CandlestickChart float={'right'} width={800} height={400}/>
      </div>
    </div>
  );
};

export default GraphView;