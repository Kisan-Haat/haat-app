
import {GET_USER, GET_TOKEN, ADD_TO_CART, CHECKOUT_REQUEST, REMOVE_FROM_CART} from '../constants/ActionTypes'
import axiosObj from '../utils/api.helper';

export const getUser = user => ({
    type: GET_USER,
    payload: axiosObj.post('/user/login', user),
});

export const getToken = token => ({
    type: GET_TOKEN,
    payload: token,
});

export const checkoutRequest = request => ({
    type: CHECKOUT_REQUEST,
    payload: request,
})

export const addToCart = cartItem => ({
    type: ADD_TO_CART,
    payload: cartItemd,
});

export const removeFromCart = cartItem => ({
    type: REMOVE_FROM_CART,
    payload: cartItem,
});

export const sendOrder = cartItem => ({
    type: SEND_ORDER,
    payload: cartItem,
});