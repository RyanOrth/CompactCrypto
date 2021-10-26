import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./graphViewTableColumns";
import './graphViewTableStyle.css';
import { IoCloseCircleOutline} from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { getVisibleRows, updateVisibleRows } from "./graphViewTableSlice";
<IoCloseCircleOutline size={20} color={'white'}/>

export const GraphViewTable = () => {
  const visibleRows = useSelector(getVisibleRows);
  const dispatch = useDispatch();

  const updateRows = (visibleRows) => dispatch(updateVisibleRows(visibleRows));

   // current row/currency to display on graph
   //eslint-disable-next-line
  const fs = require('fs');
  const json = require('../../data/data.json');
  const symbols = new Set();
  for (const object of json) {
    symbols.add(object.SYMBOL);
  }
  const cryptocurrencies = require('cryptocurrencies');
  const symbolMapping = new Map();
  for (const symbol of symbols) {
    symbolMapping.set(symbol, cryptocurrencies[symbol]);
  }
  let rowData = useMemo(() => [], []);
  for (const symbol of symbols) {
    const row = { Crypto: cryptocurrencies[symbol], ICON: '' };
    rowData.push(row);
  }
  // memoizing columns and data to prevent react from reloading json every frame
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => rowData, [rowData]);
  // Stuff for react-table:setting columns and data
  const tableInstance = useTable({
    columns,
    data
  });
  // Getting properties from react-table to be able to successfully display table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  // returning table
  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} style={{
                display: [...visibleRows].includes(row.values['Crypto']) ? 'auto' : 'none'
              }}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>
                      {(cell.column.Header !== '') ?
                        cell.render('Cell') :
                        <IoCloseCircleOutline size={30} color={'white'} onClick={() => updateRows([...visibleRows].filter(n => n !== cell.row.values['Crypto'])) } />
                      }
                    </td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}
