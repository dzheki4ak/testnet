import React from 'react';

import { HOME } from '../../routes';

import NavLink from '../NavLinks/NavLink.jsx';

const { useSelector } = require('react-redux');

const BalancePage = () => {
  const list = useSelector(state => state.transactionsList.transactionsList);

  const totalInputs = list
    .map(trns => trns.inputs)
    .flat()
    .map(input => input.output_value)
    .reduce((inVal, inAcc) => inVal + inAcc);

  const totalOutputs = list
    .map(trns => trns.outputs)
    .flat()
    .map(output => output.value)
    .reduce((outVal, outAcc) => outVal + outAcc);

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
