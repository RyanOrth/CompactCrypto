import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COMPACT_VIEW } from '../constants/action-types';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { NavBar } from '../features/navBar/NavBar';
import {
  selectCurrentPage, updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar
} from '../features/navBar/navBarSlice';
import { SideTable } from '../features/sideTable/SideTable';
import './screenCSS/compactView.css';



const CompactView = () => {
  var currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  dispatch(updateCurrentPage(COMPACT_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplaySearchBar(false));

  return (
    <div>
      <NavBar currentPage={COMPACT_VIEW} displayFilterOptions={false} displayGraphOptions={false} displaySearchBar={false} />
      <div>
        <div style={{
          display: 'none',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '10vh'
        }}
        >
          <h1>Compact View</h1>
        </div>
        <div style={{
          height: '500px',
        }}>
          <div id={'tbbl'} style={{
            float: 'left',
          }}>
            <SideTable />
          </div>
          <div style={{
            float: 'right',
            marginRight: '5%',
            marginTop: '5%',
            width: '55%',
            height: '80%',
          }}>
            <CandlestickChart width={'100%'} height={'100%'} currentPage={'COMPACT_VIEW'} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default CompactView;