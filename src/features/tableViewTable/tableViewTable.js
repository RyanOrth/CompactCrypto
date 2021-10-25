import { useMemo } from "react"
import { useTable } from "react-table"
import { COLUMNS } from "./tableViewTableColumns"
import jsonData from "../../data/data.json"

export const TableViewTable = () => {

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => jsonData, []);

  const tableInstance = useTable({
    columns,
    data
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

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
  )
}