import express from "express";
import Post from "../../models/Post.js";
import User from "../../models/User.js";
import Profile from "../../models/Profile.js";
import { auth } from "../../middleware/auth.js";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post(
    "/",
    [auth, [check("content", "Content is Required").not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select("-password");

            const newPost = new Post({
                content: req.body.content,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id,
            });

            const post = await newPost.save();

            res.json(post);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    }
);

export default router;
