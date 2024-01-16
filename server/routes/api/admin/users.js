import express from "express";
import User from "../../../models/User.js";
import { adminAuth } from "../../../middleware/adminAuth.js";
import { auth } from "../../../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.use(adminAuth);

adminRouter.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

export default adminRouter;
