import mongoose from "mongoose";

const AdSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    photo: {
        type: String,
    },
    city: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: String,
    },
    height: {
        type: String,
    },
    latinClass: {
        type: String,
    },
    standardClass: {
        type: String,
    },
    experience: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Ad = mongoose.model("ad", AdSchema);

export default Ad;
