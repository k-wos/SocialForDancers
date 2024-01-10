import express from "express";
import mongoose from "mongoose";
import Ad from "../../models/Advertisment.js";

const router = express.Router();

// @route   POST /ads
// @desc    Create a new ad
router.post("/", async (req, res) => {
    const newAd = new Ad({
        user: req.body.user,
        partnerType: req.body.partnerType,
        photo: req.body.photo,
    });

    try {
        const savedAd = await newAd.save();
        res.json(savedAd);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
