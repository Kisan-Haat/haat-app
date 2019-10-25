/*
The purpose of this file to have all the action types as constant so that there are no naming conflicts.
Note: This is a action types file.
Please remove it when developing a new app.
*/
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_ORDER = 'ADD_ORDER';
export const EMPTY_CART = 'EMPTY_CART';
export const USER_PROFILE = 'SAVE_USER';

import axiosObj from '../utils/api.helper';

export const getUser = user => ({
    type: 'GET_USER',
    payload: axiosObj.post('/user/login', user),
});

export const getToken = token => ({
    type: 'GET_TOKEN',
    payload: token,
});