import axios from "axios";
import {
    registerSuccess,
    registerFail,
    userLoaded,
    authError,
    loginSuccess,
    loginFail,
    logout,
} from "../reducers/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "../utils/setAuthToken";

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("/api/auth");
        dispatch(userLoaded(res.data));
    } catch (error) {
        dispatch(authError());
    }
};

export const register =
    ({ firstName, lastName, email, password }) =>
    async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ firstName, lastName, email, password });

        try {
            const res = await axios.post("/api/users", body, config);
            dispatch(registerSuccess({ token: res.data.token }));
            dispatch(userLoaded());
            toast.success("Rejestracja przebiegła pomyślnie");
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            dispatch(registerFail());
            toast.error(
                err.response ? err.response.data.errors[0].msg : err.message
            );
        }
    };

export const login =
    ({ email, password }) =>
    async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ email, password });

        try {
            const res = await axios.post("/api/auth", body, config);
            await dispatch(loginSuccess({ token: res.data.token }));
            setAuthToken(res.data.token);
            dispatch(userLoaded());
            toast.success("Logowanie przebiegło pomyślnie");
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            dispatch(loginFail());
            toast.error(
                err.response ? err.response.data.errors[0].msg : err.message
            );
        }
    };

export const loggedout = () => (dispatch) => {
    dispatch(logout());
    toast.success("Wylogowano");
};
