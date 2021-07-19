import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { transactionsTotalsSelector } from '../../redux/modules/transactionsList/selectors';

import NavLink from '../NavLinks/NavLink.jsx';
import TransactionDetailsList from './TransactionDetailsList.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import TransactionsWrapper from '../TransactionsWrapper/TransactionsWrapper.jsx';

import { HOME, TRANSACTIONS } from '../../routes';

const TransactionDetails = ({ location }) => {
  const list = useSelector(transactionsTotalsSelector);

  if (list.length === 0) {
    return <Spinner />;
  }

  const lookUpId = location.pathname.slice(9);
  const lookupTransaction = list.filter(
    transactn => transactn.hash === lookUpId,
  );
  const [{ inputs, outputs, confirmed, total, hash }] = lookupTransaction;

  return (
      <div className="transactions_list__page">
        <div className="transactions_list__item">
          <span className="transactions_list__item-span">
            Transaction ID:{' '}
            <span className="transactions_list__item-info">{hash}</span>{' '}
          </span>
          <span className="transactions_list__item-span">
            Transaction total:{' '}
            <span className="transactions_list__item-info">{total}</span>
          </span>
          <span className="transactions_list__item-span">
            Date confirmed:{' '}
            <span className="transactions_list__item-info">
              {moment(confirmed).format('YYYY-MM-DD HH:mm')}
            </span>
          </span>

          <div>
            <div>
              <h3>Inputs</h3>
              <TransactionDetailsList operations={inputs} />
            </div>
            <div>
              <h3>Outputs</h3>
              <TransactionDetailsList operations={outputs} />
            </div>
          </div>
          <div className="main__page_buttons">
            <NavLink text="Back" route={TRANSACTIONS} />
            <NavLink text="Home" route={HOME} />
          </div>
        </div>
      </div>
  );
};

export default TransactionDetails;
