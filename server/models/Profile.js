import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    birthday: {
        type: Date,
    },
    latinClass: {
        type: String,
    },
    standardClass: {
        type: String,
    },
    prefferdDanceStyle: {
        type: String,
    },
    favouriteDance: {
        type: String,
    },
    avatar: {
        type: String,
    },
    coverPhoto: {
        type: String,
    },
    social: {
        youtube: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("profile", ProfileSchema);
