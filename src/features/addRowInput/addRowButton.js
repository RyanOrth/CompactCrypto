import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibility, toggleVisibility } from "./addRowButtonSlice";
import { getSelectedCryto, changeCrypto, changeToken } from "../graphViewTable/graphViewTableSlice";
import symbolToCrypto from "../../data/symbolToCrypto";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export const AddRowButton = () => {
  const isVisible = useSelector(selectVisibility);
  const selectedCrypto = useSelector(getSelectedCryto);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    dispatch(toggleVisibility(isVisible ? false : true));
  }

  const setCrypto = (item) => {
    const crypto = item;
    let graphToken = '';
    for (let [key, value] of symbolToCrypto.entries()) {
      if (value === item)
        graphToken = key;
    }
    dispatch(changeCrypto(crypto));
    console.log(graphToken);
    dispatch(changeToken(graphToken));
  }

  const names = [...symbolToCrypto.values()];
  const items = [];
  for (let i = 0; i < symbolToCrypto.size; i++) {
    items.push(
      {
        id: i,
        name: names[i],
      }
    )
  }

  const handleOnSelect = (item) => {
      toggleSearch();
      setCrypto(item.name);
  }
  console.log(selectedCrypto)
  return (
    <div>
      {isVisible ?
      <div style={{ width: 200, position: 100 }}>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
          />
        </div>
      : null}
      <button onClick={ () => toggleSearch() }>
        Change Crypto
      </button>
    </div>
  )
}
