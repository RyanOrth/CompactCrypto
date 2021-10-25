import React, { useMemo } from "react";
import { useTable } from "react-table";
import jsonData from '../../data/data.json';
import { COLUMNS } from "./graphViewTableColumns";
import './graphViewTableStyle.css'

export const GraphViewTable = () => {
   // current row/currency to display on graph
  const fs = require('fs');
  const json = require('../../data/data.json');
  const symbols = new Set();
  for (const object of json) {
    symbols.add(object.SYMBOL);
  }
  console.log(symbols);
  // memoizing columns and data to prevent react from reloading json every frame
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => jsonData, []);
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
            return (// Here change color if clicked and runs onclick
              <tr {...row.getRowProps()}>
                {
                  row.cells.map((cell) => {// Here is changing cell color based on value
                    return <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
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
