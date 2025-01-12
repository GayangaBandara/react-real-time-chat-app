import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <b>{msg.sender}:</b> {msg.content}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
