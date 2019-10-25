import { combineReducers } from 'redux';
import user from './userReducer';
import userToken from './tokenReducer'

export default combineReducers({
  user,
  userToken,
});
