export const fetchUsers = () =>{
    return async (dispatch) => {
        dispatch({ type:"FETCH_START"});

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            dispatch({type: "FETCH_SUCCESS", payload: data});
        }catch(error){
            dispatch({type: "FETCH_ERROR",payload:error.message});
        }
    };
};