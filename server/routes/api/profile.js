import express from "express";
import Profile from "../../models/Profile.js";
import { auth } from "../../middleware/auth.js";
import User from "../../models/User.js";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            "user",
            ["name", "avatar"]
        );
        if (!profile) {
            return res
                .status(400)
                .json({ msg: "There is no profile for this user" });
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post("/", auth, async (req, res) => {
    const {
        birthday,
        latinClass,
        standardClass,
        prefferdDanceStyle,
        favouriteDance,
        youtube,
        twitter,
        facebook,
        instagram,
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (birthday) profileFields.birthday = birthday;
    if (latinClass) profileFields.latinClass = latinClass;
    if (standardClass) profileFields.standardClass = standardClass;
    if (prefferdDanceStyle)
        profileFields.prefferdDanceStyle = prefferdDanceStyle;
    if (favouriteDance) profileFields.favouriteDance = favouriteDance;

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        }

        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find().populate("user", [
            "name",
            "avatar",
        ]);
        res.json(profiles);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/user/:user_id", async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id,
        }).populate("user", ["name", "avatar"]);
        if (!profile) {
            return res.status(400).json({ msg: "Profile not found" });
        }
        res.json(profile);
    } catch (error) {
        console.error(error.message);
        if (error.kind == "ObjectId") {
            return res.status(400).json({ msg: "Profile not found" });
        }
        res.status(500).send("Server Error");
    }
});

router.delete("/", auth, async (req, res) => {
    try {
        await Profile.findOneAndDelete({ user: req.user.id });
        await User.findOneAndDelete({ _id: req.user.id });

        res.json({ msg: "User Removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

export default router;
