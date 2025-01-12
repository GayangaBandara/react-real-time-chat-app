const Message = require('../models/message.js');

// Fetch all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

// Send a new message
const sendMessage = async (req, res) => {
  const { sender, receiver, content, media } = req.body;

  try {
    const newMessage = new Message({ sender, receiver, content, media });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { getMessages, sendMessage };
