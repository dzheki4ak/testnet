export const FETCHED = 'testnet/transactionsList/FETCHED';

export const transactionsListActionCreator = transactionsList => ({
  type: FETCHED,
  payload: transactionsList, 
});
