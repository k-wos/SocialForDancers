import axios from "axios";
import {
    startLoading,
    hasError,
    getChatsSuccess,
    getChatSuccess,
    addChatSuccess,
} from "../reducers/chat";

export const getAllChats = () => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get("/api/chats");
        dispatch(getChatsSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};

export const getChat = (userId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get(`/api/chats/${userId}`);
        dispatch(getChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};

export const findChat = (firstUserId, secondUserId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.get(
            `/api/chats/find/${firstUserId}/${secondUserId}`
        );
        dispatch(getChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};

export const addChat = (senderId, receiverId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const res = await axios.post("/api/chats", { senderId, receiverId });
        dispatch(addChatSuccess(res.data));
    } catch (err) {
        dispatch(hasError(err.response.data));
    }
};
