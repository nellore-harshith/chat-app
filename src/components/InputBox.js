import React, { useState } from "react";

function InputBox({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "8px",
        borderTop: "1px solid #eee",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()} // ✅ Enter to send
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          padding: "10px 16px",
          borderRadius: "20px",
          background: "#25d366",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default InputBox;