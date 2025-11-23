import reducer from "./reducer4.js";

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const Store = createStore(reducer,applyMiddleware(thunk));

export default Store