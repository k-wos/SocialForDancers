import axios from "axios";
import { getProfile, profileError, getProfiles } from "../reducers/profile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");
        dispatch(getProfile(res.data));
    } catch (err) {
        dispatch(profileError(err.response.data));
    }
};

export const getAllProfiles = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile");
        dispatch(getProfiles(res.data));
    } catch (err) {
        dispatch(profileError(err.response.data));
    }
};

export const createProfile =
    (formData, navigate, edit = false) =>
    async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const res = await axios.post("/api/profile", formData, config);
            console.log(res.data);
            dispatch(getProfile(res.data));
            toast.success(edit ? "Profil zaktualizowany" : "Profil utworzony");

            navigate("/dashboard");
        } catch (err) {
            if (err.response) {
                dispatch(profileError(err.response.data));
                toast.error(err.response.data.errors[0].msg);
            } else {
                // Handle error without a response
                toast.error(err.message);
            }
        }
    };
