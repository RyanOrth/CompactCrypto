import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import jsonData from '../../data/data.json';
import { COLUMNS } from "./sideTableColumns";
import { getSelectedRow, setSelectedRow, setSelectedToken } from "./sideTableSlice";
// import './sideTableStyle.css';

export const SideTable = () => {
  // current row/currency to display on graph
  const selectedRow = useSelector(getSelectedRow);
  // const selectedToken = useSelector(getSelectedToken);
  const dispatch = useDispatch();

  const selectRow = (selectedRow) =>
    dispatch(
      setSelectedRow({
        selectedRow,
      })
    );
  const selectToken = (selectedToken) =>
    dispatch(
      setSelectedToken({
        selectedToken,
      })
    );
  const selection = (rowId, token) => {
    selectRow(rowId);
    selectToken(token);
  }
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
    <table className={'sideTable'}{...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr className={'tableHeaderRow'} {...headerGroup.getHeaderGroupProps()} >
              {
                headerGroup.headers.map(column => (
                  <th className={'sideTableth'}{...column.getHeaderProps()} style={{
                  }}
                    /* onClick={() => console.log()}*/ >
                    {
                      column.render('Header')
                    }
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
              <tr className={'sideTabletr'}{...row.getRowProps()} onClick={() => selection(row.id, row.values['SYMBOL'])} style={{
                background: row.id === selectedRow ? '#00afec' : 'white',
                color: row.id === selectedRow ? 'white' : 'black'
              }}>
                {
                  row.cells.map((cell) => {// Here is changing cell color based on value
                    return <td className={'sideTabletd'}{...cell.getCellProps()} /*onClick={() => console.log(cell)}*/ style={{
                      background: cell.column.Header === 'Gain/Loss' ? cell.value > 0 ? `rgb(50, 125, 0)` : `rgb(150,40,40)` : null,
                    }}>
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
