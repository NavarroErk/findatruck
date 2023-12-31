
import React from 'react';
import { useTable } from 'react-table';

function Results({ jsonData }){
    const columns = React.useMemo(
      () => [
        {
          Header: 'Name',
          accessor: 'legalName',
        },
        {
          Header: 'Phone',
          accessor: 'phone',
        },
        {
          Header: 'Physical Address',
          accessor: 'physicalAddress',
        },
      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data: jsonData });
  
    return (
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Results;
  