import { useMemo } from "react";
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import jsonData from "../../data/data.json";
import { COLUMNS } from "./tableViewTableColumns";
import { getFavoriteList, setFavoriteList } from "./tableViewTableSlice";

export const TableViewTable = () => {

  const favoriteList = useSelector(getFavoriteList);
  const dispatch = useDispatch();

  const updateFavoriteList = (favoriteList) =>
    dispatch(
      setFavoriteList({
        favoriteList,
      })
    )

  // const addFavorite = (favorite) =>
  //   dispatch(
  //     pushFavorite({
  //       favorite,
  //     })
  //   );
  // const deleteFavorite = (favorite) =>
  //   dispatch(
  //     popFavorite({
  //       favorite,
  //     })
  //   );

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
                      {(cell.column.Header !== 'Favorite') ?
                        cell.render('Cell') :
                        (favoriteList.includes(cell.row.values['SYMBOL'])) ?
                          <IoStar size={30} color={'red'} onClick={() => updateFavoriteList([...favoriteList].filter(n => n !== cell.row.values['SYMBOL']))} /> :
                          <IoStarOutline size={30} color={'black'} onClick={() => updateFavoriteList([...favoriteList, cell.row.values['SYMBOL']])} />}
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