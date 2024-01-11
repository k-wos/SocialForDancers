import axios from "axios";
import { toast } from "react-toastify";
import { addAd } from "../reducers/ad";

export const createAd = (adData) => async (dispatch) => {
    try {
        const res = await axios.post("/api/ads", adData);
        dispatch(addAd(res.data));
        toast.success("Dodano ogłoszenie");
    } catch (err) {
        toast.error("Błąd dodawania ogłoszenia");
    }
};
