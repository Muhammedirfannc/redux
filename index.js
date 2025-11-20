import { store } from "./Store.js";

console.log('Initial State:', store.getState());


store.subscribe(() => {
  console.log('Updated State:', store.getState());
});


store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
