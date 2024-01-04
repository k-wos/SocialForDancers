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
        // Add your action cases here
    },
});

// Reducer function
const profileReducer = profileSlice.reducer;

export default profileReducer;
