import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            default: "https://cdn-icons-png.flaticon.com/512/9790/9790561.png",
        },
        name: {
            type: String,
        },
        isGroup: {
            type: Boolean,
            default: false,
        },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
