export const inputs = 'inputs';
export const outputs = 'outputs';
export const inputValue = 'output_value';
export const outputValue = 'value';

export const totalsCalculation = (transList, transType, transValue) =>
  transList
    .map(trns => trns[transType])
    .flat()
    .map(transact => transact[transValue])
    .reduce((val, acc) => val + acc);
