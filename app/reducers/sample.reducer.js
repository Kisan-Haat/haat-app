/*
Note: This is a sample reducer.
Please remove it when developing a new app.
*/

export default sample = (state = [], action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [ ...state, {
                id: action.id,
                text: action.text,
            }];
        default:
            return state;
    }
}