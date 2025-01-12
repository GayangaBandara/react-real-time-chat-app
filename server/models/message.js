const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  content: { type: String, required: true },
  media: { type: String },  // Optional field for media URLs
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
