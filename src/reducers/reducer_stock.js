import { FETCH_DATA } from '../actions';
import  { FETCH_SELECTED_DATA } from '../actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_DATA:
      console.log("action", action.payload.data)
      return [action.payload.data, ...state];
    case FETCH_SELECTED_DATA:
      console.log("selected action", action.payload.data)
      return [action.payload.data, ...state];
    default:
      return state;
  }
}