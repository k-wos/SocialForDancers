import User from "../models/userModel.js";

export const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.json(user);
};
