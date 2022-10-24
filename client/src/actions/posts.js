import * as api from "../api/index";

//actions creator are function that return  actions
export const getPosts =  () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch({type:"FETCH_ALL", payload:data});         /* ==> action is an object with type and payload*/
    } catch (error) {
        console.log(error.message);
    }

}