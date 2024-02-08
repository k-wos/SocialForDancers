import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        getUserSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
    },
});

export const { startLoading, hasError, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;
