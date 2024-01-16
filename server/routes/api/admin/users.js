import express from "express";
import User from "../../../models/User.js";
import { adminAuth } from "../../../middleware/adminAuth.js";
import { auth } from "../../../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.use(adminAuth);

adminRouter.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

adminRouter.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: "User not found" });

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

adminRouter.post("/addUser", async (req, res) => {
    const { firstName, lastName, email, password, avatar, isAdmin } = req.body;

    try {
        let user = new User({
            firstName,
            lastName,
            email,
            password,
            avatar,
            isAdmin,
        });

        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

adminRouter.put("/updateUser/:id", async (req, res) => {
    const { firstName, lastName, email, password, avatar, isAdmin } = req.body;

    // Build a user object based on the fields that are present in the request body
    const userFields = {};
    if (firstName) userFields.firstName = firstName;
    if (lastName) userFields.lastName = lastName;
    if (email) userFields.email = email;
    if (password) userFields.password = password; // Remember to hash the password before saving in a real-world application
    if (avatar) userFields.avatar = avatar;
    if (isAdmin !== undefined) userFields.isAdmin = isAdmin;

    try {
        let user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: "User not found" });

        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true }
        );

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});
adminRouter.delete("/deleteUser/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ msg: "User not found" });

        await User.deleteOne({ _id: req.params.id });

        res.json({ msg: "User removed" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

export default adminRouter;
