import User from "../models/User.js";

export const adminAuth = async function (req, res, next) {
    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) {
        console.log(req.user);
        return res.status(401).json({ msg: "Authorization denied" });
    }
    next();
};
