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

// @route   GET /ads
// @desc    Get all ads
router.get("/", async (req, res) => {
    try {
        const ads = await Ad.find();
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
