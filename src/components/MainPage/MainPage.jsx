import React from 'react';

import { user } from '../../redux/modules/transactionsList/saga';
import * as Routes from '../../routes';

import NavLink from '../NavLinks/NavLink.jsx';


import './MainPage.scss';

const MainPage = () => {

  const { ERROR, BALANCE, TRANSACTIONS } = Routes;

  return (
    <div className="main__page">
      <h2 className="main__page_header">
        Hello,<span className="main__page_header-span">{` ${user}!`}</span>
      </h2>
      <p className="main__page_greeting">What would you like to do?</p>
      <div className="main__page_buttons">
        <NavLink text={`Check transactions`} route={TRANSACTIONS} />
        <NavLink text={`Check ballance`} route={BALANCE} />
        <NavLink text={`Send money`} route={ERROR} />
      </div>
    </div>
  );
};

export default MainPage;
