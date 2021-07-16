import React from 'react';

import { HOME } from '../../routes';

import TransactionsListItem from './TransactionsListItem.jsx';
import NavLink from '../NavLinks/NavLink.jsx';

const TransactionsList = () => (
  <div className="transactions">
    <ul className="transactions_list">
      <TransactionsListItem />
    </ul>
    <NavLink text="Home" route={HOME} />
  </div>
);

export default TransactionsList;
