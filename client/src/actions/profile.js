import axios from "axios";
import { getProfile, profileError } from "../reducers/profile";
import { toast } from "react-toastify";

export const getCurrentProfile = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/profile/me");
        dispatch(getProfile(res.data));
    } catch (err) {
        dispatch(profileError(err.response.data));
    }
};

export const createProfile =
    (formData, history, edit = false) =>
    async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const res = await axios.post("/api/profile", formData, config);
            dispatch(getProfile(res.data));
            toast.success(edit ? "Profil zaktualizowany" : "Profil utworzony");

            if (!edit) {
                history.push("/dashboard");
            }
        } catch (err) {
            dispatch(profileError(err.response.data));
            toast.error(
                err.response ? err.response.data.errors[0].msg : err.message
            );
        }
    };
