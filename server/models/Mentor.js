const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  expertise: String,
  rating: {
    type: Number,
    default: 4.5,
  },
  isFeatured: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Mentor", mentorSchema);