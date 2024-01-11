import moongose from "mongoose";
const MessageSchema = new moongose.Schema(
    {
        sender: {
            type: moongose.Schema.Types.ObjectId,
            ref: "User",
        },
        message: {
            type: String,
            trim: true,
        },
        chatId: {
            type: moongose.Schema.Types.ObjectId,
            ref: "Chat",
        },
    },
    { timestamps: true }
);
const Message = moongose.model("Message", MessageSchema);
export default Message;
