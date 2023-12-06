import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const auth = async function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "You are not authorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log(req);

    if (!token) {
        return res.status(401).json({ message: "You are not authorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
