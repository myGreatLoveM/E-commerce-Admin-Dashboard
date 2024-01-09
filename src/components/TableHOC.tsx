import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from 'react-table'

function TableHOC<T extends NonNullable<unknown>>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    }

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      gotoPage,
      pageCount,
      state: {pageIndex},
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination)

    return (
      <div className={containerClassname}>
        <h2 className='heading'>{heading}</h2>
        <table className='table' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {column.isSorted && (
                      <span>
                        {' '}
                        {column.isSortedDesc ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>

        {showPagination && pageCount * 6 > 6 && (
          <div className='table-pagination'>
            {pageCount > 2 && <button onClick={() => gotoPage(0)}>Go to 1</button>}
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
            {pageCount > 2 && <button onClick={() => gotoPage(pageCount-1)}>Go to last</button> }
          </div>
        )}
      </div>
    )
  }
}

export default TableHOC
