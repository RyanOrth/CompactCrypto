import React from 'react';
import { ACCOUNT_VIEW } from '../constants/action-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectCurrentPage,
  selectDisplayFilterOptions,
  selectDisplaySearchBar,
  updateCurrentPage,
  updateDisplayFilterOptions,
  updateDisplaySearchBar,
} from '../features/navBar/navBarSlice';

import { NavBar } from '../features/navBar/NavBar';
import './screenCSS/account.css';

import { getFavoriteList, setFavoriteList } from "../features/tableViewTable/tableViewTableSlice";
import { IoStar } from 'react-icons/io5';

const Account = () => {
  var currentPage = useSelector(selectCurrentPage);
  const favoriteList = useSelector(getFavoriteList);
  const dispatch = useDispatch();

  let currentFavoriteList = favoriteList.slice();

  dispatch(updateCurrentPage(ACCOUNT_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplaySearchBar(false));

  const updateFavoriteList = (favoriteList) =>
    dispatch(
      setFavoriteList({
        favoriteList,
      })
    )

  return (
    <div>
      <NavBar currentPage={ACCOUNT_VIEW} displayFilterOptions={false} displayGraphOptions={false} displaySearchBar={false} />
      <div className={'page'}>
        <h1>Account</h1>
        <div className={'panel'}>
          <div>
            <label>Email Notifications</label>

          </div>
          <div>
            <label for='fEmail'>Email Address</label>
            <input></input>
          </div>
        </div>

        <div className={'panel'}>
          <div>
            <label>Favorites</label>

          </div>
          <div>
            {(currentFavoriteList.length > 0) ?
              currentFavoriteList.map((favorite) => <div className={'favorite'}> <IoStar onClick={() => updateFavoriteList(currentFavoriteList.filter(item => item !== favorite))}></IoStar> {favorite} </div>)
              : (<div>No current favorites</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;