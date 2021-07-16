import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { transactionsTotalsSelector } from '../../redux/modules/transactionsList/selectors';
import { DETAILS } from '../../routes';
import Spinner from '../Spinner/Spinner.jsx';

import './TransactionsList.scss';

const TransactionsListItem = () => {
  const list = useSelector(transactionsTotalsSelector);

  if (list.length < 1) {
    return <Spinner />;
  }

  return list.map(transaction => {
    const { hash, total, confirmed } = transaction;
    const dateConfirmed = moment(confirmed).format('YYYY-MM-DD HH:mm');

    return (
      <li className="transactions_list__item" key={hash}>
        <span className="transactions_list__item-span">
          Transaction ID:{' '}
          <span className="transactions_list__item-info">{` ${hash}`}</span>{' '}
        </span>
        <span className="transactions_list__item-span">
          Transaction total:{' '}
          <span className="transactions_list__item-info">{` ${total}`}</span>
        </span>
        <span className="transactions_list__item-span">
          Date confirmed:{' '}
          <span className="transactions_list__item-info">{` ${dateConfirmed}`}</span>
        </span>
        <span className="transactions_list__item-span trans_link">
          <Link
            to={`${DETAILS}/${hash}`}
            className="transactions_list__item-link"
          >
            More details...
          </Link>
        </span>
      </li>
    );
  });
};

export default TransactionsListItem;
