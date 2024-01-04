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
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Reducer function
export const { getProfile, profileError } = profileSlice.reducer;

export default profileSlice.actions;
