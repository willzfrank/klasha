import React, { useState } from 'react';
import Logo from '../assets/klasha__logo 1.png';

import { SideBarView, LogoView, ListView } from '../css/SidebarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faWallet,
  faChevronLeft,
  faCircleQuestion,
  faArrowsRotate,
  faCartShopping,
  faArrowRightArrowLeft,
  faLink,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleListItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <SideBarView>
      <LogoView>
        <Link to="/" className="nav__link">
          <img src={Logo} alt="logo" />
        </Link>
      </LogoView>
      <div>
        <ListView>
          <h6>Main Pages</h6>
          <li
            onClick={() => handleListItemClick(0)}
            className={activeIndex === 0 ? 'active' : ''}
          >
            <Link to="/" className="nav__link">
              <FontAwesomeIcon icon={faChartPie} />
              <span> Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => handleListItemClick(1)}
            className={activeIndex === 1 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faWallet} /> <span>Balances</span>
          </li>
          <li
            onClick={() => handleListItemClick(2)}
            className={activeIndex === 2 ? 'active' : ''}
          >
            <Link to="/transaction" className="nav__link">
              <i className="uil uil-sorting"></i> <span>Transaction</span>
            </Link>
          </li>
          <li
            className={`messages-view ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleListItemClick(3)}
          >
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Analytics</span>{' '}
          </li>
          <li
            onClick={() => handleListItemClick(4)}
            className={activeIndex === 4 ? 'active' : ''}
          >
            <i className="uil uil-megaphone"></i> <span>Marketing</span>
          </li>
          <li
            onClick={() => handleListItemClick(5)}
            className={activeIndex === 5 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span>Exchange rates</span>
          </li>
        </ListView>

        <ListView>
          <h6>Accept payments</h6>

          <li
            onClick={() => handleListItemClick(6)}
            className={activeIndex === 6 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faCartShopping} /> <span>Checkout</span>
          </li>
          <li
            className={`notification-view ${activeIndex === 7 ? 'active' : ''}`}
            onClick={() => handleListItemClick(7)}
          >
            <FontAwesomeIcon icon={faLink} /> <span>Payment Links</span>
          </li>
        </ListView>

        <ListView>
          <h6>Send payments</h6>

          <li
            onClick={() => handleListItemClick(8)}
            className={activeIndex === 8 ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} /> <span>Wire</span>
          </li>
        </ListView>

        <ListView>
          <div className="support__btn">
            <FontAwesomeIcon icon={faCircleQuestion} />
            Support
          </div>
          <div className="panel__btn">
            <FontAwesomeIcon icon={faChevronLeft} />
            Hide Panel
          </div>
        </ListView>
      </div>
    </SideBarView>
  );
};

export default SideBar;
