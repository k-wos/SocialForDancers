import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        getUsersStart: (state) => {
            state.loading = true;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
        getUsersFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearUsers: (state) => {
            state.users = [];
            state.loading = false;
        },
        getUsersUnauthorized: (state) => {
            state.error = "Unauthorized";
            state.loading = false;
        },
    },
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailure,
    clearUsers,
    getUsersUnauthorized,
} = adminSlice.actions;

export default adminSlice.reducer;
