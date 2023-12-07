import { validationResult } from "express-validator";
import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            creator: req.user.id,
            tags: req.body.tags,
            media: req.body.media,
        });
        await post.save();

        res.json({ post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findOOne({
            _id: req.params.id,
            creator: req.user.id,
        });
        if (!post) return res.status(404).json({ message: "Post not found" });

        await post.deleteOne({ _id: req.params.id });

        res.status(204).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
