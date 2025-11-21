import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./counterReducer1.js";
import { loggerMiddleware } from "./loggerMiddleware.js";

export const store = createStore(
    counterReducer,
    applyMiddleware(loggerMiddleware)
);