import React from 'react';
import { COMPACT_VIEW } from '../constants/action-types';
import { CandlestickChart } from '../features/graph/CandlestickChart';
import { NavBar } from '../features/navBar/NavBar';
import { SideTable } from '../features/sideTable/SideTable';
import './screenCSS/compactView.css'

import { useSelector, useDispatch } from 'react-redux';

import {
    selectCurrentPage,
    selectDisplayFilterOptions,
    selectDisplaySearchBar,
    updateCurrentPage,
    updateDisplayFilterOptions,
    updateDisplaySearchBar,
} from '../features/navBar/navBarSlice';

const CompactView = () => {
    var currentPage = useSelector(selectCurrentPage);
    const dispatch = useDispatch();

    dispatch(updateCurrentPage(COMPACT_VIEW));
    dispatch(updateDisplayFilterOptions(false));
    dispatch(updateDisplaySearchBar(false));

    return (
        <div>
            <NavBar currentPage={COMPACT_VIEW} displayFilterOptions={false} displaySearchBar={false} />
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
                    height: '900px',
                }}>
                    <div id={'tbbl'} style={{
                        float: 'left',
                    }}>
                        <SideTable />
                    </div>
                    <div style={{
                        float: 'right',
                    }}>
                        <CandlestickChart width={500} height={400} currentPage={'COMPACT_VIEW'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompactView;