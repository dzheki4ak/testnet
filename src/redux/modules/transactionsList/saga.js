import { put, call } from '@redux-saga/core/effects';
import { transactionsListActionCreator } from './actions';

export const user = '2MvvYEgXvTzCLDMPNPBB68boQTrkbpiBZh6';

const baseUrl = `https://api.blockcypher.com/v1/btc/test3/addrs/${user}/full`;

const getTransactionsList = async () => await (await fetch(baseUrl)).json();

const loadDataWorker = function* () {
  const list = yield call(getTransactionsList);
  yield put(transactionsListActionCreator(list.txs));
};

export const loadDataSaga = function* () {
  yield loadDataWorker();
};
