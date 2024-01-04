import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        authError: (state) => {
            localStorage.removeItem("token");
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
        },
        registerSuccess: (state, action) => {
            const { token } = action.payload;
            localStorage.setItem("token", token);
            state.isAuthenticated = true;
            state.loading = false;
        },
        registerFail: (state) => {
            localStorage.removeItem("token");
            state.isAuthenticated = false;
            state.loading = false;
        },
    },
});

export const { registerSuccess, registerFail, userLoaded, authError } =
    authSlice.actions;
export default authSlice.reducer;
