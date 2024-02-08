import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [],
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        getChatsSuccess: (state, action) => {
            state.chats = action.payload;
            state.loading = false;
        },
        getChatSuccess: (state, action) => {
            state.chats = state.chats.map((chat) =>
                chat._id === action.payload._id ? action.payload : chat
            );
            state.loading = false;
        },
        addChatSuccess: (state, action) => {
            state.chats.push(action.payload);
            state.loading = false;
        },
    },
});

export const {
    startLoading,
    hasError,
    getChatsSuccess,
    getChatSuccess,
    addChatSuccess,
} = chatSlice.actions;

export default chatSlice.reducer;
