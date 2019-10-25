const token = (state = {}, action) => {
    switch (action.type) {
      case 'GET_TOKEN':
        return action.payload;
      default:
        return state;
    }
  };
  export default token;