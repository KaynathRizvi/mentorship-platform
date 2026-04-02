const Mentor = require("../models/Mentor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {

  try {

    const { name, email, password, expertise } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const mentor = await Mentor.create({
      name,
      email,
      password: hashedPassword,
      expertise
    });

    res.json(mentor);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const mentor = await Mentor.findOne({ email });

  if (!mentor) {
    return res.status(400).json({ message: "Mentor not found" });
  }

  const match = await bcrypt.compare(password, mentor.password);

  if (!match) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: mentor._id },
    process.env.JWT_SECRET
  );

  res.json({ token });

};