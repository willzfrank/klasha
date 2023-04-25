import React from 'react';

import ApexChart from './StaffChart';
import Lines from '../assets/lines.png';

import Download from '../assets/Vector.png';
import WeekChart from './WeekChart';

import {
  DashboardView,
  DashboardNavView,
  DashboardSalesOverview,
  DashboardGraphView,
  KlashaCard,
} from '../css/DashboardPageStyles';
import UserDetails from './UserDetails';

const Daashboard = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <UserDetails />
      </DashboardNavView>
      <DashboardSalesOverview>
        <h2>Sales Overview</h2>
        <div className="app__salesOverview">
          <div className="sales__card">
            <div>
              <p className="today__sales">Today's sales</p>
              <p className="sales__amount">₦1,652.50</p>
            </div>
          </div>
          <div className="sales__card black__theme">
            <div>
              <p className="today__sales white__color">24 Aug - 01 Sep 21</p>
              <div className="chart">
                <WeekChart />
              </div>
              <p className="today__sales white__color">This week</p>
              <p className="sales__amount white__color">₦1,652.50</p>
            </div>
          </div>
          <div className="sales__card">
            <div>
              <p className="today__sales">24 Aug - 01 Sep 21</p>
              <div className="chart">
                <WeekChart />
              </div>
              <p className="today__sales">This month</p>
              <p className="sales__amount">₦1,652.50</p>
            </div>
          </div>
          <div className="sales__card">
            <div>
              <p className="today__sales">24 Aug - 01 Sep 21</p>
              <div className="chart">
                <WeekChart />
              </div>
              <p className="today__sales">Last month</p>
              <p className="sales__amount">₦1,652.50</p>
            </div>
          </div>
        </div>
      </DashboardSalesOverview>
      <DashboardGraphView>
        <div className="app__salesGraph">
          <div className="app__salesGraphContent">
            <h2>Sales</h2>
            <div className="divider"></div>
            <p className="theme__color">7 days</p>
            <p>30 days</p>
            <select name="" id="" className="usd__option">
              <option value="USD">USD</option>
            </select>

            <select name="" id="" className="email__option">
              <option value="Email">Email</option>
            </select>
            <div className="download__btn dropdown_icon">
              <img src={Download} alt="" />
              download report
            </div>
          </div>
          <div className="sales_graph">
            <ApexChart />
          </div>
        </div>

        <KlashaCard>
          <div className="app__klashaCard">
            <h2>KlashaWire - send money to businesses globally from Africa</h2>
            <button className="dropdown_icon">Send a Wire</button>
            <div className="image__klasha">
              <img src={Lines} alt="" />
            </div>
          </div>
        </KlashaCard>
      </DashboardGraphView>
    </DashboardView>
  );
};

export default Daashboard;
