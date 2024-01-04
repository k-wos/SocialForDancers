import axios from "axios";
import { registerSuccess, registerFail } from "../reducers/auth";

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
        } catch (err) {
            console.error(err.response ? err.response.data : err.message);
            dispatch(registerFail());
        }
    };
