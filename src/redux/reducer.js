import { XACTIN_LIST_FETCHED } from './actions.js';

const initialState = {};

export const xactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case XACTIN_LIST_FETCHED:
      return {
        ...state,
        xactionsList: action.payload,
      };
    default:
      return state;
  }
};
