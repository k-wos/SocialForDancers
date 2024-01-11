import express from "express";
import mongoose from "mongoose";
import Ad from "../../models/Advertisment.js";
import { auth } from "../../middleware/auth.js";

const router = express.Router();

// @route   POST /ads
// @desc    Create a new ad
router.post("/", auth, async (req, res) => {
    const {
        photo,
        city,
        gender,
        age,
        height,
        latinClass,
        standardClass,
        experience,
    } = req.body;
    const adFields = {};
    adFields.user = req.user.id;
    if (photo) adFields.photo = photo;
    if (city) adFields.city = city;
    if (gender) adFields.gender = gender;
    if (age) adFields.age = age;
    if (height) adFields.height = height;
    if (latinClass) adFields.latinClass = latinClass;
    if (standardClass) adFields.standardClass = standardClass;
    if (experience) adFields.experience = experience;

    try {
        let ad = await Ad.findOne({ user: req.user.id });
        if (ad) {
            ad = await Ad.findOneAndUpdate(
                { user: req.user.id },
                { $set: adFields },
                { new: true }
            );
            return res.json(ad);
        }
        ad = new Ad(adFields);

        await ad.save();
        res.json(ad);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// @route   GET /ads
// @desc    Get all ads
router.get("/", async (req, res) => {
    try {
        const ads = await Ad.find().populate("user", [
            "firstName",
            "lastName",
            "email",
        ]);
        res.json(ads);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// @route   GET /ads/:id
// @desc    Get ad by id
router.get("/:id", async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        res.json(ad);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// @route   PUT /ads/:id
// @desc    Update ad by id
router.put("/:id", async (req, res) => {
    try {
        const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedAd);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// @route   DELETE /ads/:id
// @desc    Delete ad by id
router.delete("/:id", async (req, res) => {
    try {
        await Ad.findByIdAndDelete(req.params.id);
        res.json({ message: "Ad deleted" });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default router;
