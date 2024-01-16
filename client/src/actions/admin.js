import axios from "axios";
import {
    getUsersSuccess,
    getUsersFailure,
    getUsersUnauthorized,
    createUserStart,
    createUserSuccess,
    createUserFailure,
} from "../reducers/admin";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/admin/users", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        if (err.response.status === 401) {
            dispatch(getUsersUnauthorized());
        } else {
            dispatch(getUsersFailure(err.response.data));
        }
    }
};

export const createUser = (userData) => async (dispatch) => {
    dispatch(createUserStart());

    try {
        const res = await axios.post("/api/admin/addUser", userData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        dispatch(createUserSuccess(res.data));
    } catch (err) {
        dispatch(createUserFailure(err.response.data));
    }
};
