import express from "express";
import Chat from "../../models/Chat.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const chat = await Chat.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
        const chat = await Chat.findOne({
            members: {
                $all: [req.params.firstUserId, req.params.secondUserId],
            },
        });
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
