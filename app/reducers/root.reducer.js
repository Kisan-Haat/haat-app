import { combineReducers } from 'redux';
import user from './userReducer';
import userToken from './tokenReducer'
import cart from './cart.reducer';

export default combineReducers({
  user,
  userToken,
  cart,
});
