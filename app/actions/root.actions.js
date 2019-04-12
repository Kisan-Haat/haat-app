/*
The purpose of this file to have all the action dispatch implementations,
so that it is commonly used throughout.
All action types are maintained in types.actions.js to avoid naming conflicts
Note: This is a sample root actions.
Please remove it when developing a new app.
*/
import {ADD_TEST} from "./types.actions";

let nextId = 0;

export const addTest = (text) => ({
    type: ADD_TEST,
    id: nextId++,
    text
})