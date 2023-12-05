import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    media: [],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
    tags: [String],
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: "users",
    },
    comments: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comments",
            },
        ],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model("posts", postSchema);
