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
        createUserStart: (state) => {
            state.loading = true;
        },
        createUserSuccess: (state, action) => {
            state.users = [...state.users, action.payload];
            state.loading = false;
        },
        createUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            const updatedUserIndex = state.users.findIndex(
                (user) => user.id === action.payload.id
            );
            if (updatedUserIndex !== -1) {
                state.users[updatedUserIndex] = action.payload;
            }
            state.loading = false;
        },
        updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.users = state.users.filter(
                (user) => user._id !== action.payload
            );
            state.loading = false;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
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
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
} = adminSlice.actions;

export default adminSlice.reducer;
