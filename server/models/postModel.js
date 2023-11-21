const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        image: { type: String },
        likes: [{ type: String }],
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
