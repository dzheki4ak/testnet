/* eslint-disable camelcase */
import React from 'react';

const TransactionDetailsList = ({ operations }) => (
  <>
    <ul className="transactions_list">
      {operations.map(opr => {
        const { output_value, value, hash } = opr;
        const [address] = opr.addresses;
        
        return (
          <li key={hash}>
            <span className="transactions_list__item-span">
              Address:{' '}
              {<span className="transactions_list__item-info">{address}</span>}
            </span>
            <span className="transactions_list__item-span">
              Amount:{' '}
              {
                <span className="transactions_list__item-info">
                  {output_value || value}
                </span>
              }
            </span>
          </li>
        );
      })}
    </ul>
  </>
);

export default TransactionDetailsList;
