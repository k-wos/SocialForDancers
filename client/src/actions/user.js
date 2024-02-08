import axios from "axios";
import { startLoading, hasError, getUserSuccess } from "../reducers/user";

export const getUser = (userId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get(`/api/users/${userId}`);
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};
