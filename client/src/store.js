import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import postReducer from "./reducers/post";

export default configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        post: postReducer,
    },
});
