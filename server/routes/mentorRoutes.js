const express = require("express");

const router = express.Router();

const { signup, login } = require("../controllers/mentorController");
const Mentor = require("../models/Mentor");

router.post("/signup", signup);
router.post("/login", login);

router.get("/featured", async (req, res) => {
  try {
    const mentors = await Mentor.find().sort({ isFeatured: -1 })
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;