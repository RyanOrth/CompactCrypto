import React from 'react';
import { GRAPH_VIEW } from '../constants/action-types';
import { CandlestickChart } from '../features/graph/CandlestickChart';

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
				<h1>Graph View</h1>
				<CandlestickChart width={800} height={400} />
			</div>
		</div>
	);
};

export default GraphView;