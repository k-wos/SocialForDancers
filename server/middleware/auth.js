import jwt from "jsonwebtoken";

export const auth = async function (req, res, next) {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({ msg: "Authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
