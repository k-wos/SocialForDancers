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
        addPost: (state, action) => {
            state.push(action.payload);
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        },
        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const post = state.find((post) => post.id === id);
            if (post) {
                post.title = title;
                post.content = content;
            }
        },
    },
});

export const { addPost, deletePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
