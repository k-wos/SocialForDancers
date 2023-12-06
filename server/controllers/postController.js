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
