import express from "express";
import Post from "../../models/Post.js";
import User from "../../models/User.js";
import Profile from "../../models/Profile.js";
import { auth } from "../../middleware/auth.js";
import { check, validationResult } from "express-validator";
import multer from "multer";

const router = express.Router();

const upload = multer({
    limits: {
        fileSize: 1000000, // limit to 1MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(
                new Error("Please upload an image file (jpg, jpeg, png)")
            );
        }
        cb(undefined, true);
    },
});

router.post(
    "/",
    [
        auth,
        upload.single("upload"),
        [check("content", "Content is Required").not().isEmpty()],
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select("-password");

            const newPost = new Post({
                content: req.body.content,
                name: user.firstName + " " + user.lastName,
                avatar: user.avatar,
                user: req.user.id,
            });

            if (req.file) {
                const buffer = new Buffer.from(req.file.buffer).toString(
                    "base64"
                );
                newPost.img = buffer;
            }

            const post = await newPost.save();

            res.json(post);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    }
);

router.get("/", auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/user/:userId", async (req, res) => {
    try {
        const posts = await Post.find({ user: req.params.userId });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: "Post not found" });
        }

        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "User not authorized" });
        }

        await post.deleteOne();
        res.json({ msg: "Post removed" });
    } catch (error) {
        console.error(error.message);
        if (error === "ObjectId") {
            return res.status(404).json({ msg: "Post not found" });
        }
        res.status(500).send("Server Error");
    }
});

router.put("/like/:id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
                .length > 0
        ) {
            return res.status(400).json({ msg: "Post already liked" });
        }

        post.likes.unshift({ user: req.user.id });

        await post.save();
        res.json(post.likes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.put("/unlike/:id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (
            (post.likes.filter(
                (like) => like.user.toString() === req.user.id
            ).length = 0)
        ) {
            return res.status(400).json({ msg: "Post not liked" });
        }

        const remove = post.likes
            .map((like) => like.user.toString())
            .indexOf(req.user.id);

        post.likes.splice(remove, 1);

        await post.save();
        res.json(post.likes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post(
    "/comment/:id",
    [auth, [check("content", "Content is Required").not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select("-password");
            const post = await Post.findById(req.params.id);

            const newComment = {
                content: req.body.content,
                name: user.firstName + " " + user.lastName,
                avatar: user.avatar,
                user: req.user.id,
            };

            post.comments.unshift(newComment);

            await post.save();

            res.json(post.comments);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    }
);

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        const comment = post.comments.find(
            (comment) => comment.id === req.params.comment_id
        );

        if (!comment) {
            return res.status(404).json({ msg: "Comment not found" });
        }

        if (comment.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not authorized" });
        }

        const remove = post.comments
            .map((comment) => comment.id.toString())
            .indexOf(req.params.comment_id);

        post.comments.splice(remove, 1);

        await post.save();

        res.json(post.comments);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
export default router;
