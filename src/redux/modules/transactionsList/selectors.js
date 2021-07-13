
export const transactionsTotalsSelector = state =>
  state.transactionsList.transactions;



export const sumOfallInputsSelector = state =>
  transactionsTotalsSelector(state)
    .map(trns => trns.inputs)
    .flat()
    .map(input => input.output_value)
    .reduce((inVal, inAcc) => inVal + inAcc, 0) / 1000;

export const sumOfallOutputsSelector = state =>
  transactionsTotalsSelector(state)
    .map(trns => trns.outputs)
    .flat()
    .map(output => output.value)
    .reduce((outVal, outAcc) => outVal + outAcc, 0) / 1000;




