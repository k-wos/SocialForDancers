import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: null,
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
        getChatSuccess: (state, action) => {
            state.chat = action.payload;
            state.loading = false;
        },
    },
});

export const { startLoading, hasError, getChatSuccess } = chatSlice.actions;

export default chatSlice.reducer;
