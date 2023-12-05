import User from "../models/userModel";
import { createJWT, hashString } from "../utils";
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

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!(email || password)) {
            next("Provide all the required fields");
            return;
        }

        const user = await User.findOne({ email })
            .select("+password")
            .populate({
                path: "friends",
                select: "firstName lastName location profileUrl -password",
            });

        if (!user) {
            next("Invalid email or password");
            return;
        }
        if (!user?.verified) {
            next("Please verify your email");
            return;
        }
        const isMatch = await compareString(password, user?.password);

        if (!isMatch) {
            next("Invalid email or password");
            return;
        }

        user.password = undefined;
        const token = createJWT(user?._id);

        res.status(201).json({
            success: true,
            message: "Login successful",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
