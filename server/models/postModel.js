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
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

postSchema.pre("save", async function () {
    try {
        const user = await mongoose
            .model("users")
            .findByIdAndUpdate(
                this.creator,
                { $push: { posts: this._id } },
                { new: true }
            );
    } catch (error) {
        console.error(error);
    }
});

export default mongoose.model("posts", postSchema);
