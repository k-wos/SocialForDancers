import express from "express";
import { register, getUser } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/user", auth, getUser);
router.post("/register", register);

export default router;
