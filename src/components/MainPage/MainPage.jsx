import React from 'react';
import { Link } from 'react-router-dom';

import './MainPage.scss';

import { user } from '../../redux/gateway';

const MainPage = () => (
  <div className="main__page">
    <h2 className="main__page_header">
      Hello,<span className="main__page_header-span">{` ${user}!`}</span>
    </h2>
    <p className="main__page_greeting">What would you like to do?</p>
    <div className="main__page_buttons">

      <button className="main__page_buttons-btn btn">
        <Link to="/any" className="link">
          Check transactions
        </Link>
      </button>

      <button className="main__page_buttons-btn btn">
        <Link to="/balance" className="link">
          Check ballance
        </Link>
      </button>

      <button className="main__page_buttons-btn btn">
        <Link to="/error" className="link">
          Send money
        </Link>
      </button>

    </div>
  </div>
);

export default MainPage;
