import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  DropDownMenu,
  DropDownBtn,
} from './DropDownElements';

import {
  selectItems,
  selectDefaultTitle,
  selectValue,
  updateItems,
  updateDefaultTitle,
  updateValue,
} from './dropDownSlice';

import styles from './DropDown.module.css';

export function DropDown(props) {
  var currentValue = useSelector(selectValue);
  var items = useSelector(selectItems);
  const dispatch = useDispatch();

  dispatch(updateItems(props.items));
  dispatch(updateDefaultTitle(props.defaultTitle));

  if(!props.items.includes(currentValue) || currentValue === ''){
    currentValue = props.defaultTitle;
    dispatch(updateValue(currentValue));
  }

  return (
    <DropDownMenu>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{currentValue}</button>
        <div className={styles['dropdown-content']}>
          {items.map((item) => <DropDownBtn onClick={() => dispatch((item === 'None' ? updateValue(props.defaultTitle): updateValue(item)))} activeStyle>{item}</DropDownBtn>)}
        </div>
      </div>
    </DropDownMenu>
  );
}