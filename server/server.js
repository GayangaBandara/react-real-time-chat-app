const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');
require('dotenv').config();

const messageRoutes = require('./routes/messageRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Replace with your frontend URL in production
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// WebSocket setup
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('send_message', (message) => {
    io.emit('receive_message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Database connection and server start
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Database connection error:', err));
