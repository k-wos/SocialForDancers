import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { id4 as uuidv4 } from "uuid";
import { hashString } from ".";
import { Verification } from "../models/verificationModel";
s;

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, AUTH_URL } = process.env;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASSWORD,
    },
});

export const sendVerificationEmail = async (user, res) => {
    const { _id, email, lastName } = user;
    const token = _id + uuidv4();

    const link = APP_URL + "users/verify/" + _id + "/" + token;

    const mailOptions = {
        from: AUTH_EMAIL,
        to: email,
        subject: "Email Verification",
        html: `<h1>Hello ${lastName}</h1><p>Click on the link below to verify your email</p><a href=${link}>${link}</a>`,
    };

    try {
        const hashedToken = await hashString(token);
        const newVerifiedEmail = await Verification.create({
            userId: _id,
            token: hashedToken,
            createdAt: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });

        if (newVerifiedEmail) {
            transporter
                .sendMail(mailOptions)
                .then(() => {
                    res.status(201).send({
                        success: "Pending",
                        message:
                            "Email sent successfully. Check your email to verify your account",
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(404).json({ message: "Email not sent" });
                });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Email not sent" });
    }
};
