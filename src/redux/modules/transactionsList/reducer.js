import { FETCHED } from './actions.js';

const initialState = {};

export const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        transactionsList: action.payload,
      };
    default:
      return state;
  }
};
