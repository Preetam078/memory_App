import * as api from "../api/index";

//actions creator are function that return  actions
export const getPosts =  () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch({type:"FETCH_ALL", payload:data});         /* ==> action is an object with type and payload*/
    } catch (error) {
        console.log(error);
    }

}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: "CREATE", payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
       const {data} =  await api.updatePost(id, post);
       dispatch({type: "UPDATE", payload: data})
    } catch ({error}) {
        console.log(error);
    }
}