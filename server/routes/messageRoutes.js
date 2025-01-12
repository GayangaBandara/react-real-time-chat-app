const express = require('express');
const { getMessages, sendMessage } = require('../controllers/messageController');
const router = express.Router();

// Route to fetch all messages
router.get('/', getMessages);

// Route to send a new message
router.post('/', sendMessage);

module.exports = router;
