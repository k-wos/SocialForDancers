import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("User route");
});

// @route   POST api/users
// @desc    Register user
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("User route");
});

export default router;
