import { combineReducers } from "redux";
import { counterReducer } from "./Reducer.js";
import { todoReducer } from "./todoReducer.js";

export const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
});