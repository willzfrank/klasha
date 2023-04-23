import React from 'react';
import user from '../assets/L.png';
import dropdown from '../assets/drop down.png';
import download from '../assets/Vector.png';
import lines from '../assets/lines.png';

import {
  DashboardView,
  DashboardNavView,
  DashboardUserView,
  DashboardSalesOverview,
  DashboardGraphView,
  KlashaCard,
} from '../css/DashboardPageStyles';
import ApexChart from './StaffChart';
import AttendanceChart from './AttendanceChart';

const Daashboard = () => {
  return (
    <DashboardView>
      <DashboardNavView>
        <DashboardUserView>
          <div className="app__user">
            <img src={user} alt="" />
            <img src={dropdown} alt="" />
          </div>
          <div className="app__user">
            <p>En</p>
            <img src={dropdown} alt="" />
          </div>
        </DashboardUserView>
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
          <div className="sales__card">
            <div>
              <p className="today__sales">24 Aug - 01 Sep 21</p>
              <span>CHART HERE</span>
              <p className="today__sales">This week</p>
              <p className="sales__amount">₦1,652.50</p>
            </div>
          </div>
          <div className="sales__card">
            <div>
              <p className="today__sales">24 Aug - 01 Sep 21</p>
              {/* <AttendanceChart /> */}
              <p className="today__sales">This month</p>
              <p className="sales__amount">₦1,652.50</p>
            </div>
          </div>
          <div className="sales__card">
            <div>
              <p className="today__sales">24 Aug - 01 Sep 21</p>
              <span>CHART HERE</span>
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
            <div className="download__btn">
              <img src={download} alt="" />
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
            <button>Send a Wire</button>
            <div className="image__klasha">
              <img src={lines} alt="" />
            </div>
          </div>
        </KlashaCard>
      </DashboardGraphView>
    </DashboardView>
  );
};

export default Daashboard;
