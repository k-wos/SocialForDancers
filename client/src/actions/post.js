import axios from "axios";

import {
    getPosts,
    postError,
    updateLikes,
    removeLikes,
    addPosts,
    addComments,
} from "../reducers/post";

export const getAllPosts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/posts");
        dispatch(getPosts(res.data));
        console.log(res.data);
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
export const addPost = (formData, navigate) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        console.log(formData);
        const res = await axios.post("/api/posts", formData, config);
        dispatch(addPosts(res.data));
        navigate("/posts");
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};

export const addLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);
        dispatch(updateLikes({ id: postId, likes: res.data }));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};

export const removeLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);
        dispatch(removeLikes({ id: postId, likes: res.data }));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
export const addComment = (postId, formData) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post(
            `/api/posts/comment/${postId}`,
            formData,
            config
        );

        dispatch(addComments({ id: postId, comment: res.data }));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
