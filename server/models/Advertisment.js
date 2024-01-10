import moongose from "mongoose";

const AdSchema = new moongose.Schema({
    user: {
        type: moongose.Schema.Types.ObjectId,
        ref: "user",
    },
    partnerType: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Ad = moongose.model("ad", AdSchema);

export default Ad;
