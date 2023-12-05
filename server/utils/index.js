import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const hashPassword = async (useValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(useValue, salt);
    return hashedPassword;
};
