import { combineReducers } from 'redux';

import StockReducer from './reducer_stock';

const rootReducer = combineReducers({
  Stock: StockReducer
});

export default rootReducer;
