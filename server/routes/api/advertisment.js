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
