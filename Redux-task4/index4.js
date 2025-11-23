import { fetchUsers } from "./action4.js";
import Store from "./store4.js";

Store.subscribe(()=>{
    console.log("State changed:",Store.getState());
});

Store.dispatch(fetchUsers());