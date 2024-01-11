import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ad: null,
    ads: [],
    loading: true,
    error: {},
};

const adSlice = createSlice({
    name: "ad",
    initialState,
    reducers: {
        addAd: (state, action) => {
            state.ads.push(action.payload);
        },
        getAds: (state, action) => {
            state.ads = action.payload;
        },
    },
});

export const { addAd, getAds } = adSlice.actions;

export default adSlice.reducer;
