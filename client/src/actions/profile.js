import axios from "axios";
import { getProfile, profileError } from "../reducers/profile";

export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");
        dispatch(getProfile(res.data));
    } catch (err) {
        dispatch(profileError(err.response.data));
    }
};
