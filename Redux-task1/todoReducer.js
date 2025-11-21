export function todoReducer(state ={todos: []},action){
    switch(action.type){
        case "ADD_TODO":
            return {todos : [...state.todos,action.payload]};
        default:
            return state
    }
}