import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    password: { type: String, required: true, minlength: 6 },
    bio: String,
    picture: String,
    birthDate: Date,
    danceClassLatin: String,
    danceClassStandard: String,
    prefferedDanceStyle: String,
    favouriteDance: String,
    height: Number,
    city: String,
});

export default mongoose.model("users", userSchema);
