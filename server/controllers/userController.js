import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.json(user);
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.staus(401).json({ msg: "Invalid credentials" });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        res.status(200).json({
            message: "Login successful",
            user: user.toObject(),
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
};

export const getUser = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        const userName = user.firstName;

        res.json({ name: userName });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
};
