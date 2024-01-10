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
        getAd: (state, action) => {
            state.ad = action.payload;
            state.loading = false;
        },
        adError: (state, action) => {
            state.ad = null;
            state.error = action.payload;
            state.loading = false;
        },
        clearAd: (state) => {
            state.ad = null;
            state.loading = false;
        },
        getAds: (state, action) => {
            state.ads = action.payload;
            state.loading = false;
        },
    },
});

export const { getAd, adError, clearAd, getAds } = adSlice.actions;

export default adSlice.reducer;
