import React, { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import Message from "./components/Message";

function App() {
  const [messages, setMessages] = useState([]);

  // Load messages
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(saved);
  }, []);

  // Save messages
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (text) => {
    const newMsg = {
      id: Date.now(),
      content: text,
      timestamp: new Date().toLocaleTimeString(),
      pinned: false,
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const deleteForMe = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const deleteForEveryone = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? { ...msg, content: "This message was deleted" }
          : msg
      )
    );
  };

  const togglePin = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, pinned: !msg.pinned } : msg
      )
    );
  };

  const pinnedMessages = messages.filter((m) => m.pinned);
  const normalMessages = messages.filter((m) => !m.pinned);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "15px",
          padding: "15px",

          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Header */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          💬 CHAT APP
        </h1>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            marginBottom: "10px",
          }}
        >
          {messages.length === 0 && (
            <p style={{ textAlign: "center", color: "gray" }}>
              No messages yet 👋
            </p>
          )}

          {pinnedMessages.length > 0 && <h4>📌 Pinned</h4>}
          {pinnedMessages.map((msg) => (
            <Message
              key={msg.id}
              msg={msg}
              deleteForMe={deleteForMe}
              deleteForEveryone={deleteForEveryone}
              togglePin={togglePin}
            />
          ))}

          {normalMessages.map((msg) => (
            <Message
              key={msg.id}
              msg={msg}
              deleteForMe={deleteForMe}
              deleteForEveryone={deleteForEveryone}
              togglePin={togglePin}
            />
          ))}
        </div>

        {/* Input */}
        <InputBox sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;