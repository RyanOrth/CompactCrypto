import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CheckBoxItem.module.css';

import { FaSquare, FaCheckSquare } from 'react-icons/fa';

import {
  selectBoxChecked,
  selectItem,
  selectOptions,
  updateBoxChecked,
  updateItem,
  updateOptions,
} from './checkBoxItemSlice';

export function CheckBoxItem(props) {
  var boxChecked = useSelector(selectBoxChecked);
  var item = useSelector(selectItem);
  var options = useSelector(selectOptions);
  const dispatch = useDispatch();

  var updatedList = [...options.slice(0,props.id), !options[props.id], ...options.slice(props.id+1)];
  return (
    options[props.id] ? (
      <div className={styles['check-box-item']}><FaCheckSquare className={styles['checkbox']} onClick={() => dispatch(updateOptions(updatedList))}></FaCheckSquare>{props.item}</div>) 
      : (<div className={styles['check-box-item']}><FaSquare className={styles['checkbox']} onClick={() => dispatch(updateOptions(updatedList))}></FaSquare>{props.item}</div>)
  );
}