import axios from "axios";
import { startLoading, hasError, getChatSuccess } from "../reducers/chat";

export const getChat = (userId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get(`/api/chat/${userId}`);
        dispatch(getChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};

export const findChat = (firstUserId, secondUserId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get(
            `/api/chat/find/${firstUserId}/${secondUserId}`
        );
        dispatch(getChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};

export const addChat = (senderId, receiverId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.post("/api/chat", { senderId, receiverId });
        dispatch(getChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};
