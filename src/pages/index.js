import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMPACT_VIEW } from '../constants/action-types';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { NavBar } from '../features/navBar/NavBar';
import {
  selectCurrentPage, updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplayGraphOptions,
  updateDisplaySearchBar
} from '../features/navBar/navBarSlice';
import { SideTable } from '../features/sideTable/SideTable';
import { getSelectedToken } from '../features/sideTable/sideTableSlice';
import styles from './screenCSS/compactView.css';



const CompactView = () => {
  var currentPage = useSelector(selectCurrentPage);
  let currentToken = useSelector(getSelectedToken);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(COMPACT_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplayGraphOptions(false));
  dispatch(updateDisplaySearchBar(false));

  return (
    <div>
      <NavBar currentPage={COMPACT_VIEW} displayFilterOptions={false} displayGraphOptions={false} displaySearchBar={false} />
      <div>

        <div className={'page'}>
          <div id={'tbbl'}>
            <SideTable />
          </div>
          <div className={'candleStickChart'}>
            <CandlestickChart width={'100%'} height={'100%'} currentPage={'COMPACT_VIEW'} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default CompactView;