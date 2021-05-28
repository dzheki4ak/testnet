export const XACTIN_LIST_FETCHED = 'LIST/XACTIN_LIST_FETCHED';

export const xactionsListActionCreator = xactionsList => ({
  type: XACTIN_LIST_FETCHED,
  payload: xactionsList,
});
