import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import postReducer from "./reducers/post";
import adReducer from "./reducers/ad";
import adminReducer from "./reducers/admin";
import chatReducer from "./reducers/chat";

export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        post: postReducer,
        ad: adReducer,
        admin: adminReducer,
        chat: chatReducer,
    },
});
