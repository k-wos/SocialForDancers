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
    },
});

export const { getPosts, postError, updateLikes, removeLikes } =
    postSlice.actions;
export default postSlice.reducer;
