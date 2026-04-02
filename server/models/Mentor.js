const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({

  name: String,

  email: {
    type: String,
    unique: true
  },

  password: String,

  expertise: String,

  rating: {
    type: Number,
    default: 5
  }

});

module.exports = mongoose.model("Mentor", mentorSchema);