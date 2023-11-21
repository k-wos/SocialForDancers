import mongoose, {Schema} from "mongoose";


const userSchema = new Schema({ 

    firstName: {
        type: String,
        required: [true, "Imię jest wymagane"],
    },
    lastName: {
        type: String,
        required: [true, "Nazwisko jest wymagane"],
    },
    email: {
        type: String,
        required: [true, "Email jest wymagany"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Hasło jest wymagane"],
        minlength: [6, "Hasło musi mieć przynajmniej 6 znaków"],
        select: true,
    },
    location: { type: String,},
    profileUrl: { type: String,},
    danceClass: { type: String,},
    prefferedDanceStyle: { type: String,},
    friends: [{ type: Schema.Types.ObjectId, ref: "Users" }],

});