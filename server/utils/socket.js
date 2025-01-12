const Message = require('../models/message.js');

let io;
function setupSocket(socketIo) {
  io = socketIo;

  io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('send_message', async (data) => {
      const message = new Message(data);
      await message.save();
      io.emit('receive_message', message);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
}

module.exports = { setupSocket };
