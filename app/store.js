import {createStore, compose} from "redux";

// import {autoRehydrate} from 'redux-persist';

import rootReducer from './reducers/root.reducer';

export default createStore(rootReducer);