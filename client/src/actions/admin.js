import axios from "axios";
import {
    getUsersSuccess,
    getUsersFailure,
    getUsersUnauthorized,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
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

export const updateUser = (userId, userData) => async (dispatch) => {
    dispatch(updateUserStart());

    try {
        const res = await axios.put(
            `/api/admin/updateUser/${userId}`,
            userData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure(err.response.data));
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    dispatch(deleteUserStart());

    try {
        await axios.delete(`/api/admin/deleteUser/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        dispatch(deleteUserSuccess(userId));
    } catch (err) {
        dispatch(deleteUserFailure(err.response.data));
    }
};
