import { combineReducers } from 'redux';
import authReducer from './authReducer'; 

export default combineReducers({
  auth: authReducer
}); 

//create a combineReducers object and pass it keys