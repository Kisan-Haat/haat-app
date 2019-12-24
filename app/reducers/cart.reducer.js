import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const cart = (state = {}, action) => {
  switch (action.type){
    case ADD_TO_CART:
      return {
        data: action.payload,
        error: false,
      }
      default: return state
  }
}
export default cart;