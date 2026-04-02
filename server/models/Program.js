const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({

  title: String,

  description: String,

  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor"
  },

  studentsEnrolled: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model("Program", programSchema);