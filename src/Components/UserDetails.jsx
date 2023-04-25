import React from 'react';
import { DashboardUserView } from '../css/DashboardPageStyles';
import User from '../assets/L.png';
import Dropdown from '../assets/drop down.png';

const UserDetails = () => {
  return (
    <DashboardUserView>
      <div className="app__user">
        <img src={User} alt="" className="user__img" />
        <img src={Dropdown} alt="" className="dropdown_icon" />
      </div>
      <div className="app__user">
        <p>En</p>
        <img src={Dropdown} alt="" className="dropdown_icon" />
      </div>
    </DashboardUserView>
  );
};

export default UserDetails;
