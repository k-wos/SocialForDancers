import axios from "axios";
import { toast } from "react-toastify";
import { addAd, getAds } from "../reducers/ad";

export const createAd = (adData) => async (dispatch) => {
    try {
        const res = await axios.post("/api/ads", adData);
        dispatch(addAd(res.data));
        toast.success("Dodano ogłoszenie");
    } catch (err) {
        toast.error("Błąd dodawania ogłoszenia");
    }
};

export const fetchAds = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/ads");
        dispatch(getAds(res.data));
    } catch (err) {
        toast.error("Błąd pobierania ogłoszeń");
    }
};
