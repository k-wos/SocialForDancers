import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.json(user);
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
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
