import {REQUEST_STOCK} from './appActions.js';

const initialState = {
  data: []
}; 

export default function stocks(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STOCK:
      return {
        ...state, data: action.payload.data.query.results.quote
      };
    default: return state;
  }
}
