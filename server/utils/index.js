import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const hashString = async (useValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(useValue, salt);
    return hashedPassword;
};

export const compareString = async (useValue, hashedValue) => {
    const isMatch = await bcrypt.compare(useValue, hashedValue);
    return isMatch;
};

export function createJWT(id) {
    return JWT.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}
