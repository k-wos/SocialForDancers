import axios from "axios";

import { getPosts, postError, updateLikes, removeLikes } from "../reducers/post";

export const getAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/posts");
        dispatch(getPosts(res.data));
        console.log(res.data);
    } catch (err) {
        dispatch(postError(err.response.data));
    }
    
};

export const addLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);
        dispatch(updateLikes(id, likes: res.data));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};

export const removeLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);
        dispatch(removeLikes(id, likes: res.data));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
