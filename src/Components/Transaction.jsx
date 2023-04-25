import React from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { TransactionTable } from '../css/TransactionStyles';
import UserDetails from './UserDetails';
import Filter from '../assets/Group 482719.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBarsFilter,
} from '@fortawesome/free-solid-svg-icons';
import DataTable from './DataTable';

const Transaction = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <UserDetails />
      </DashboardNavView>
      <TransactionTable>
        <div className="transaction__table">
          <div className="TransactionTitle">
            <p>Transaction history</p>
          </div>
          <div className="search_input">
            <div className="left__input">
              <input type="text" name="" id="" placeholder="Search" />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="right__filter">
              <div className="transaction_btn">
                <p>
                  Filter
                  <img src={Filter} alt="" />
                </p>
              </div>
              <div className="transaction_btn">
                <p>Export </p>
              </div>
            </div>
          </div>
          <div className="table">
            <DataTable />
          </div>
        </div>
      </TransactionTable>
    </DashboardView>
  );
};

export default Transaction;
