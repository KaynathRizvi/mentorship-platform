const Program = require("../models/Program");

exports.getFeaturedPrograms = async (req, res) => {

  try {

    const programs = await Program.find()
      .sort({ studentsEnrolled: -1 })
      .limit(5);

    res.json(programs);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};