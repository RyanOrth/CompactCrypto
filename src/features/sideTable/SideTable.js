import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import jsonData from '../../data/data.json';
import { COLUMNS } from "./sideTableColumns";
import { getSelectedRow, setSelectedRow } from "./sideTableSlice";
import './sideTableStyle.css'

export const SideTable = () => {
  // current row/currency to display on graph
  const selectedRow = useSelector(getSelectedRow);
  const dispatch = useDispatch();

  const selectRow = (selectedRow) =>
    dispatch(
      setSelectedRow({
        selectedRow,
      })
    );

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
            return (
              <tr {...row.getRowProps()} onClick={() => selectRow(row.id)} style={{
                background: row.id === selectedRow ? '#00afec' : 'white',
                color: row.id === selectedRow ? 'white' : 'black'
              }}>
                {
                  row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
/*
getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => {
                  this.setState({
                    selectedRow: rowInfo.index
                  })
                },
                style: {
                  background: rowInfo.index === this.state.selectedRow ? '#00afec' : 'white',
                  color: rowInfo.index === this.state.selectedRow ? 'white' : 'black'
                }
              }
            } else {
              return {}
            }
          }}
*/