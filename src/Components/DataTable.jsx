import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import TableHeaderCell from './TableHeaderCell';
import TableDataRow from './TableDataRow';
// import '../styles/dashboard_body.scss';
import details from '../data/TransactionData';
import { TableContainer } from '../css/TransactionStyles';

const PAGE_SIZE = 10;

function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return details.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, details]);

  return (
    <TableContainer className="table_container">
      <table>
        <thead>
          <tr>
            <TableHeaderCell>Transaction ID</TableHeaderCell>
            <TableHeaderCell>Source</TableHeaderCell>
            <TableHeaderCell>Customer name</TableHeaderCell>
            <TableHeaderCell>Customer email</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Request date</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, index) => (
            <TableDataRow key={item.id} item={item} index={index} />
          ))}
        </tbody>
      </table>
      <div className="pagination__container">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={details.length}
          pageSize={PAGE_SIZE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </TableContainer>
  );
}

export default DataTable;
