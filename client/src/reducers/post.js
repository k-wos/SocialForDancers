import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {},
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
        },
        postError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        addPosts: (state, action) => {
            state.posts.push(action.payload);
            state.loading = false;
        },
        updateLikes: (state, action) => {
            state.posts = state.posts.map((post) =>
                post._id === action.payload.id
                    ? { ...post, likes: action.payload.likes }
                    : post
            );
        },
        removeLikes: (state, action) => {
            state.posts = state.posts.map((post) =>
                post._id === action.payload.id
                    ? { ...post, likes: action.payload.likes }
                    : post
            );
        },
        addComments: (state, action) => {
            const { postId, comment } = action.payload;
            const postIndex = state.posts.findIndex(
                (post) => post._id === postId
            );
            if (postIndex !== -1) {
                state.posts[postIndex].comments.unshift(comment);
            }
        },
        removeComments: (state, action) => {
            const { postId, commentId } = action.payload;
            const postIndex = state.posts.findIndex(
                (post) => post._id === postId
            );
            if (postIndex !== -1) {
                const commentIndex = state.posts[postIndex].comments.findIndex(
                    (comment) => comment._id === commentId
                );
                if (commentIndex !== -1) {
                    state.posts[postIndex].comments.splice(commentIndex, 1);
                }
            }
        },
    },
});

export const {
    getPosts,
    postError,
    updateLikes,
    removeLikes,
    addPosts,
    addComments,
    removeComments,
} = postSlice.actions;
export default postSlice.reducer;
