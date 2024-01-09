import axios from "axios";

import { getPosts, postError } from "../reducers/post";

export const getAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/posts");
        dispatch(getPosts(res.data));
        console.log(res.data);
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
