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
    <div >
      <NavBar currentPage={GRAPH_VIEW} displayFilterOptions={false} displayGraphOptions={true} displaySearchBar={true} />
			<div className={'page'}>
				<div className={'tableAndButton'}>
					<div className={'table'}>
						<GraphViewTable />
					</div>
					<div>
							<AddRowButton/>
					</div>
				</div>
				<div className={'graph'}>
            <CandlestickChart />
          </div>
			</div>
		</div>
	);
};

export default GraphView;