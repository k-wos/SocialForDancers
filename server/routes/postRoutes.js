import express from "express";
import { auth } from "../middleware/auth.js";
import { createPost } from "../controllers/postController.js";
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

export default router;
