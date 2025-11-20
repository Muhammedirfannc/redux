import { createStore } from "redux";
import { counterReducer } from "./Reducer.js";

export const store = createStore(counterReducer);

export default store;