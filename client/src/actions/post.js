import axios from "axios";

import {
    getPosts,
    postError,
    updateLikes,
    removeLikes,
    addPosts,
    addComments,
    removeComments,
    setUserPosts,
    deletePost,
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
        console.log(formData);
        const res = await axios.post("/api/posts", formData);
        dispatch(addPosts(res.data));
        dispatch(getAllPosts());
        navigate("/posts");
    } catch (err) {
        if (err.response) {
            dispatch(postError(err.response.data));
        } else {
            console.error(err);
        }
    }
};

export const removePost = (postId, navigate) => async (dispatch) => {
    try {
        await axios.delete(`/api/posts/${postId}`);
        dispatch(deletePost(postId));
        navigate("/posts");
    } catch (err) {
        if (err.response) {
            dispatch(postError(err.response.data));
        } else {
            console.error(err);
        }
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
export const removeComment = (postId, commentId) => async (dispatch) => {
    try {
        await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

        dispatch(removeComments({ postId, commentId }));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
export const getUserPosts = (userId) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/posts/user/${userId}`);
        dispatch(setUserPosts(res.data));
    } catch (err) {
        dispatch(postError(err.response.data));
    }
};
