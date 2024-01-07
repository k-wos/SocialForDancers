import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {},
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        getProfile: (state, action) => {
            state.profile = action.payload;
            state.loading = false;
        },
        profileError: (state, action) => {
            state.profile = null;
            state.error = action.payload;
            state.loading = false;
        },
        clearProfile: (state) => {
            state.profile = null;
            state.loading = false;
        },
    },
});

export const { getProfile, profileError, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
