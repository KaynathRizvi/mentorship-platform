const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");


// ✅ Send message (REST fallback if needed)
router.post("/send", async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    const newMessage = new Chat({
      senderId,
      receiverId,
      message,
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ✅ Get chat between two users
router.get("/:senderId/:receiverId", async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Chat.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
