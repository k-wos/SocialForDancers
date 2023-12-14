import express from "express";
import { auth } from "../../middleware/auth.js";
import User from "../../models/User.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

export default router;
