import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectItems,
  selectValue,
  updateItems,
  updateValue,
} from './dropDownSlice';

import styles from './DropDown.module.css';

export function DropDown(props) {
  var currentValue = useSelector(selectValue);
  var items = useSelector(selectItems);
  const dispatch = useDispatch();

  dispatch(updateItems(props.items));

  return (
    <div className={styles.dropdown}>
      <select
        value={currentValue}
        onChange={(e) => dispatch(updateValue(e.target.selectValue))}
      >
        <option value={items[0]}>{items[0]}</option>
        <option value={items[1]}>{items[1]}</option>
        <option value={items[2]}>{items[2]}</option>
        <option value={items[3]}>{items[3]}</option>
      </select>
    </div>
  );
}