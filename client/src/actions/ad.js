import axios from "axios";
import { toast } from "react-toastify";
import { getAd, adError, getAds } from "../reducers/ad";

export const loadAd = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/ads/${id}`);
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
        const res = await axios.get("/api/ads");
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
        const res = await axios.post("/api/ads", formData);
        dispatch(getAd(res.data));
        toast.success("Dodanno ogłoszenie");
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
