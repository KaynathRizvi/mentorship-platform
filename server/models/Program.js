const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  title: String,
  description: String,
  mentorName: String,
  duration: String,
  price: Number,
  isFeatured: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Program", programSchema);