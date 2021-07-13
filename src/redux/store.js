import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from '@redux-saga/core';

import reducer from './modules/reducers';

import {rootSaga} from './modules/sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
