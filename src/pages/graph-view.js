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
  updateDisplayGraphOptions,
  updateDisplaySearchBar,
} from '../features/navBar/navBarSlice';

const GraphView = () => {
	var currentPage = useSelector(selectCurrentPage);
	const dispatch = useDispatch();

	dispatch(updateCurrentPage(GRAPH_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplayGraphOptions(true));
  dispatch(updateDisplaySearchBar(true));

  return (
    <div>
      <NavBar currentPage={GRAPH_VIEW} displayFilterOptions={false} displayGraphOptions={true} displaySearchBar={true} />
			<div
				style={{
					display: 'flex',
					alignItems: 'Right',
					height: '500px'
				}}
			>
				<div id={'tbbl'} style={{
            float: 'left',
          }}>
					<GraphViewTable />
					<AddRowButton/>
          </div>
          <div style={{
            float: 'right',
            marginRight: '5%',
            marginTop: '5%',
            width: '55%',
            height: '80%',
          }}>
            <CandlestickChart width={'100%'} height={'100%'} />
          </div>
			</div>
		</div>
	);
};

export default GraphView;