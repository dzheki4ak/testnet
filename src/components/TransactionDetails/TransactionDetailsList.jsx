import React from 'react';
import TransactionDetailsListItem from './TransactionDetailsListItem.jsx';

const TransactionDetailsList = ({ operations }) => (
  <>
    <ul className="transactions_list">
      <TransactionDetailsListItem operations={operations} />
    </ul>
  </>
);

export default TransactionDetailsList;