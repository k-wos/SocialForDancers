import express from "express";
import Chat from "../../models/Chat.js";

const router = express.Router();

// POST /api/chat
// Create a new chat message

router.post("/", async (req, res) => {
    const { message, sender, receiver } = req.body;

    try {
        const newMessage = new Chat({
            message,
            sender,
            receiver,
        });

        const savedMessage = await newMessage.save();

        res.json(savedMessage);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// GET /api/chat/:sender/:receiver
// Get all chat messages between two users

router.get("/:sender/:receiver", async (req, res) => {
    const { sender, receiver } = req.params;

    try {
        const messages = await Chat.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender },
            ],
        });

        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

export default router;
