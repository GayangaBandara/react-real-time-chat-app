import React, { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatRoom = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
