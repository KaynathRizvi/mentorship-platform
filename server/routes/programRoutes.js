const express = require("express");

const router = express.Router();

const {
  getFeaturedPrograms
} = require("../controllers/programController");

router.get("/featured", getFeaturedPrograms);

module.exports = router;