import React, { useState } from "react";
import GroupChat from "./components/GroupChat";
import PrivateChat from "./components/PrivateChat";
import MediaUpload from "./components/MediaUpload";

function App() {
  const [isGroupChat, setIsGroupChat] = useState(true);

  return (
    <div className="app">
      <header>
        <h1>Real-Time Chat App</h1>
      </header>
      <div className="chat-container">
        {isGroupChat ? (
          <GroupChat />
        ) : (
          <PrivateChat />
        )}
      </div>
      <div className="chat-input">
        <button onClick={() => setIsGroupChat(!isGroupChat)}>
          Switch to {isGroupChat ? "Private" : "Group"} Chat
        </button>
        <MediaUpload />
      </div>
    </div>
  );
}

export default App;
