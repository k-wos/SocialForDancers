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
