import { useMemo } from "react";
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';
import { useDispatch, useSelector } from "react-redux";
import { useSortBy, useTable } from "react-table";
import jsonData from "../../data/data.json";
import { COLUMNS } from "./tableViewTableColumns";
import { getFavoriteList, setFavoriteList } from "./tableViewTableSlice";
import { selectValue } from "../dropDown/dropDownSlice";
import './tableViewTableCSS.css';



export const TableViewTable = () => {

	const favoriteList = useSelector(getFavoriteList);
	const filterType = useSelector(selectValue);
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
	}, useSortBy);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

	return (
		<table {...getTableProps()}>
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map(column => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
										{
											(column.Header !== 'Favorite') ?
												<span style={{ float: 'right' }}>
													{
														column.isSorted ? (column.isSortedDesc ?
															<TiArrowSortedDown size={20} color={'black'} /> :
															<TiArrowSortedUp size={20} color={'black'} />
														) : <TiArrowUnsorted size={20} color={'black'} />
													}
												</span> : ''
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
							(filterType !== 'Favorites' || favoriteList.includes(row.values.SYMBOL) || favoriteList.length === 0) ?
								<tr {...row.getRowProps()}>
									{
										row.cells.map((cell) => {// Here is changing cell color based on value
											return <td {...cell.getCellProps()} style={{
												background: cell.column.Header === 'Gain/Loss' ? cell.value > 0 ? `rgb(50, 125, 0)` : `rgb(150,40,40)` : null,
											}}>
												{(cell.column.Header !== 'Favorite') ?
													cell.render('Cell') :
													(favoriteList.includes(cell.row.values['SYMBOL'])) ?
														<IoStar size={30} color={'red'} onClick={() => updateFavoriteList([...favoriteList].filter(n => n !== cell.row.values['SYMBOL']))} /> :
														<IoStarOutline size={30} color={'black'} onClick={() => updateFavoriteList([...favoriteList, cell.row.values['SYMBOL']])} />}
											</td>
										})
									}
								</tr>
								: ''
						)
					})
				}
			</tbody>
		</table>
	)
}