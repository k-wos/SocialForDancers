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

export const { registerSuccess, registerFail } = authSlice.actions;
export default authSlice.reducer;
