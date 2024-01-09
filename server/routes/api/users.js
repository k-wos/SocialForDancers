import express from "express";
import { check, validationResult } from "express-validator";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../models/User.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("User route");
});

// @route   POST api/users
// @desc    Register user
router.post(
    "/",
    [
        check("firstName", "First name is required").not().isEmpty(),
        check("lastName", "Last name is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters"
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName, lastName, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({
                    errors: [{ msg: "User already exists" }],
                });
            }

            user = new User({
                firstName,
                lastName,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET_KEY,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    }
);

router.put("/:userId/follow", async (req, res) => {
    if (req.body.userId !== req.params.userId) {
        try {
            const user = await User.findById(req.params.userId);
            const currentUser = await User.findById(req.body.userId);

            if (
                !user.followers.some(
                    (follower) => follower.user.toString() === req.body.userId
                )
            ) {
                await user.updateOne({
                    $push: { followers: { user: req.body.userId } },
                });
                await currentUser.updateOne({
                    $push: { following: { user: req.params.userId } },
                });
                res.status(200).json("User has been followed");
            } else {
                res.status(400).json("You are already following this user");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    }
});
router.put("/:userId/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.userId) {
        try {
            const user = await User.findById(req.params.userId);
            const currentUser = await User.findById(req.body.userId);

            if (
                user.followers.some(
                    (follower) => follower.user.toString() === req.body.userId
                )
            ) {
                await user.updateOne({
                    $pull: { followers: { user: req.body.userId } },
                });
                await currentUser.updateOne({
                    $pull: { following: { user: req.params.userId } },
                });
                res.status(200).json("User has been unfollowed");
            } else {
                res.status(400).json("You are not following this user");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    }
});

export default router;
