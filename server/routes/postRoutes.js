import express from "express";
import { auth } from "../middleware/auth.js";
import { createPost, deletePost } from "../controllers/postController.js";
import { check } from "express-validator";

const router = express.Router();

router.post(
    "/posts",
    [
        auth,
        [
            check("title", "Title is required").not().isEmpty(),
            check("content", "Content is required").not().isEmpty(),
        ],
    ],
    createPost
);
router.delete("/posts/:id", auth, deletePost);

export default router;
