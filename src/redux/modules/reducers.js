import { combineReducers } from 'redux';

import { transactionsReducer } from './transactionsList/reducer';

const reducer = combineReducers({ transactionsList: transactionsReducer });

export default reducer;