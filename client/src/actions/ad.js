import axios from "axios";
import { toast } from "react-toastify";
import { getAd, adError, getAds } from "./adSlice";

export const loadAd = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/ads/${id}`);
        dispatch(getAd(res.data));
    } catch (err) {
        dispatch(
            adError({
                msg: err.response.statusText,
                status: err.response.status,
            })
        );
        toast.error(err.response.statusText);
    }
};

export const loadAds = () => async (dispatch) => {
    try {
        const res = await axios.get("/ads");
        dispatch(getAds(res.data));
    } catch (err) {
        dispatch(
            adError({
                msg: err.response.statusText,
                status: err.response.status,
            })
        );
        toast.error(err.response.statusText);
    }
};

export const createNewAd = (formData) => async (dispatch) => {
    try {
        const res = await axios.post("/ads", formData);
        dispatch(getAd(res.data));
        toast.success("Ad created");
    } catch (err) {
        dispatch(
            adError({
                msg: err.response.statusText,
                status: err.response.status,
            })
        );
        toast.error(err.response.statusText);
    }
};
