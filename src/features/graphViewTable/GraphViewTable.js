import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./graphViewTableColumns";
import './graphViewTableStyle.css';
import { useSelector } from "react-redux";
import { getSelectedCryto } from "./graphViewTableSlice";

export const GraphViewTable = () => {
  const selectedCrypto = useSelector(getSelectedCryto);

   //eslint-disable-next-line
  const fs = require('fs');
  const json = require('../../data/data.json');
  const symbols = new Set();
  for (const object of json) {
    symbols.add(object.SYMBOL);
  }
  const cryptocurrencies = require('cryptocurrencies');
  
  let rowData = useMemo(() => [], []);
  for (const symbol of symbols) {
    const row = { Crypto: cryptocurrencies[symbol] };
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
    <table style={{
      width: '200px',
      height: '200px',
      borderWidth: '2px',
      borderColor: 'white',
    }} {...getTableProps()}>
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
                display: selectedCrypto === row.values['Crypto'] ? 'inline' : 'none',
              }}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>
                      {
                        cell.render('Cell')
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
