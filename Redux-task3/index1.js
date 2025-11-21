import { decrement, increment } from "./action1.js";
import { store } from "./store1.js";

console.log("Intial state:",store.getState());

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());