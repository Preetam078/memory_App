export default (posts = [], action) => {
 {/*    if(action.type === "CREATE") {
        return ;
    }
    if(action.type === "CREATE") {
        return ;
    }
    if(action.type === "CREATE") {
        return ;
    }
    if(action.type === "CREATE") {
        return ;
    }
    if(action.type === "CREATE") {
        return ;
    }*/}

    switch(action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        case "UPDATE":
            return posts.map((post) =>  post._id === action.payload._id ? action.payload: post);
        default:
            return posts;
    }
}