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
});

const User = mongoose.model("user", UserSchema);

export default User;
