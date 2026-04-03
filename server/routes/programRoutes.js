const express = require("express");
const router = express.Router();
const Program = require("../models/Program");

// ✅ GET Featured Programs
router.get("/featured", async (req, res) => {
  try {
    const programs = await Program.find({ isFeatured: true }).limit(10);
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;