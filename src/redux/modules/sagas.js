import { all, spawn } from '@redux-saga/core/effects';
import { loadDataSaga } from './transactionsList/saga';

export const rootSaga = function* root() {
  yield all([spawn(loadDataSaga)]);
};
