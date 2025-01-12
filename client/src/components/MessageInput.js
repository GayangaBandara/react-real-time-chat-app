import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage({ sender: 'User', content: message });
      setMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
