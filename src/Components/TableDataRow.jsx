import React from 'react';

const TableDataRow = ({ item, index }) => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.source}</td>
      <td>{item.customerName}</td>
      <td>{item.customerEmail}</td>
      <td>${item.amount}.00</td>
      <td>{item.requestDate}</td>
      <td>{item.status}</td>
    </tr>
  );
};

export default TableDataRow;
