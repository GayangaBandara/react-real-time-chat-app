import React, { createContext, useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ChatContext = createContext();

const socket = socketIOClient('http://localhost:5000');

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    socket.on('receive_message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  const sendMessage = (message) => {
    socket.emit('send_message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
