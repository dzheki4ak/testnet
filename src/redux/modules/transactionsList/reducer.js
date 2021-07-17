import { FETCHED } from './actions.js';

const initialState = {
  data: []
};

export const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
