/*
Note: This is a sample reducer.
Please remove it when developing a new app.
*/

import { combineReducers } from 'redux';
import user from './userReducer';
import userToken from './tokenReducer'

export const loginReducer = combineReducers({
  user,
  userToken,
});
