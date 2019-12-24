const user = (state = {}, action) => {
    switch (action.type) {
      case 'GET_USER_PENDING':
        return {
            isLoading: true,
            // data: action.payload,
            error: false
        }
    case 'GET_USER_FULLILLED':
        return {
            isLoading: false,
            data: action.payload,
            error: false
        }
      default:
        return state;
    }
  };
  export default user;