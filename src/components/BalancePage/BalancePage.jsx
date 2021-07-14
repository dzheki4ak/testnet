import React from 'react';

import { useSelector } from 'react-redux';

import { HOME } from '../../routes';

import { transactionsTotalsSelector } from '../../redux/modules/transactionsList/selectors';
import * as helpers from '../../helpers';
import NavLink from '../NavLinks/NavLink.jsx';

const BalancePage = () => {
  const list = useSelector(transactionsTotalsSelector);

  const { totalsCalculation, inputs, outputs, inputValue, outputValue } =
    helpers;

  const totalInputs = totalsCalculation(list, inputs, inputValue);

  const totalOutputs = totalsCalculation(list, outputs, outputValue);

  return (
    <div className="balance__page">
      <h1 className="balance__page_balance">
        Your current balance is:
        <span className="main__page_header-span">{` ${
          totalInputs - totalOutputs
        } 💲`}</span>
      </h1>
      <h3 className="balance__page_spent">
        Total spent:
        <span className="main__page_header-span">{` ${totalOutputs} 💲`}</span>
      </h3>
      <h3 className="balance__page_received">
        Total received:
        <span className="main__page_header-span">{` ${totalInputs} 💲`}</span>
      </h3>
      <NavLink text={`Home`} route={HOME} />
    </div>
  );
};

export default BalancePage;
