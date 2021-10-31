import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibility, toggleVisibility } from "./addRowButtonSlice";
import { getVisibleRows, updateVisibleRows } from "../graphViewTable/graphViewTableSlice";
import symbolToCrypto from "../../data/symbolToCrypto";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export const AddRowButton = () => {
  const isVisible = useSelector(selectVisibility);
  const visibleRows = useSelector(getVisibleRows);
  const dispatch = useDispatch();

  const toggleSearch = () => {
    console.log('before dispatch: ', isVisible)
    dispatch(toggleVisibility(isVisible ? false : true));
    console.log('after dispatch: ', isVisible)
  }

  const addRow = (item) => {
    const rows = visibleRows.concat([item]);
    console.log('rows: ', rows)
    dispatch(updateVisibleRows(rows))
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
    if (!visibleRows.includes(item.name)){
      toggleSearch();
      addRow(item.name);
    }
    console.log(item)
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

  console.log(items);

  return (
    <div>
      {isVisible ?
      <div style={{ width: 200, position: 100 }}>
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      : null}
      <button onClick={ () => toggleSearch() }>
        Add
      </button>
    </div>
  )
}
