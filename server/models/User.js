import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
    },
    followers: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
            },
        },
    ],
    following: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
            },
        },
    ],
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("user", UserSchema);

export default User;
