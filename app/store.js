import {createStore, compose} from "redux";

import rootReducer from './reducers/root.reducer';

export default createStore(rootReducer);

//console.log(store.getState())