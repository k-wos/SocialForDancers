import express from "express";

import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/userController.js";
import { auth } from "../utils/index.js";

const router = express.Router();

router.get("/", auth, getUsers);
router.get("/:id", auth, getUser);
router.post("/", createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
