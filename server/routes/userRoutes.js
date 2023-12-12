import express from "express";
import { register, login, getUser } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/user", auth, getUser);
router.post("/register", register);
router.post("/login", login);

export default router;
