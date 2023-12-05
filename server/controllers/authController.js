import User from "../models/userModel";
import { hashPassword } from "../utils";

export const register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!(firstName || lastName || email || password)) {
        next("Provide all the required fields");
        return;
    }

    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            next("Email already exist");
            return;
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
    } catch (error) {
        next(error);
        return;
    }
};
