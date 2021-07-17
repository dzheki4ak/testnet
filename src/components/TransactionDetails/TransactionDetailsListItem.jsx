import React from 'react';

const TransactionDetailsListItem = ({ operations }) => (
    operations.map(opr => {
      const { output_value, value, spent_by } = opr;
      const [address] = opr.addresses;

      return (
        <li key={spent_by}>
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
    })
  )

export default TransactionDetailsListItem;