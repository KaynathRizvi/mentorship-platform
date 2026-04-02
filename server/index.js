const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const mentorRoutes = require("./routes/mentorRoutes");
const programRoutes = require("./routes/programRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mentorship Platform API Running");
});

app.use("/api/mentors", mentorRoutes);
app.use("/api/programs", programRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});