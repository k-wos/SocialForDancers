import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./../models/userModel.js";

User.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

User.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    return token;
};

export const auth = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
        const data = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: data._id });
        if (!user) throw new Error("User not found");
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
