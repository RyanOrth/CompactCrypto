import React from 'react';
import { ACCOUNT_VIEW } from '../constants/action-types';
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

import { NavBar } from '../features/navBar/NavBar';
import './screenCSS/account.css';

import { getFavoriteList, setFavoriteList } from "../features/tableViewTable/tableViewTableSlice";
import { IoStar } from 'react-icons/io5';
import { FaSquare, FaCheckSquare } from 'react-icons/fa';
import { CheckBoxItem } from '../features/checkBoxItem/CheckBoxItem';

const Account = () => {
  var currentPage = useSelector(selectCurrentPage);
  const favoriteList = useSelector(getFavoriteList);
  const dispatch = useDispatch();

  let currentFavoriteList = favoriteList.slice();

  dispatch(updateCurrentPage(ACCOUNT_VIEW));
  dispatch(updateDisplayFilterOptions(false));
  dispatch(updateDisplayGraphOptions(false));
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
        <div className={'panels'}>
          <div className={'panel'}>
            <div>
              <label>Email Notifications</label>

            </div>
            <div>
              <label for='fEmail'>Email Address</label>
              <input></input>
            </div>
            <button>Click for Email Notifications</button>
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

          <div className={'panel'}>
            <dive>
              <label>Types of Cryptocurrencies for Notifications</label>
            </dive>
            <div className={'notification-list'}>
              <CheckBoxItem id={0} key={'checkbox1'} boxChecked={false} item={'Changes to Favorites'}/>
              <CheckBoxItem id={1} key={'checkbox2'} boxChecked={false} item={'Quick Decrease'}/>
              <CheckBoxItem id={2} key={'checkbox3'} boxChecked={false} item={'Quick Increase'}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;