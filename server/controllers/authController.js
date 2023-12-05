import User from "../models/userModel";
import { hashString } from "../utils";
import { sendVerificationEmail } from "../utils/sendEmail";

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

        const hashedPassword = await hashString(password);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        sendVerificationEmail(user, res);
    } catch (error) {
        next(error);
        return;
    }
};
