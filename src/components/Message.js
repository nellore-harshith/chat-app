import React from "react";

function Message({ msg, deleteForMe, deleteForEveryone, togglePin }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "10px 0",
      }}
    >
      {/* Message Bubble */}
      <div
        style={{
          background: msg.pinned ? "#fff3cd" : "#dcf8c6",
          borderRadius: "12px",
          padding: "10px",
          maxWidth: "75%",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
          {msg.content}
        </p>

        <small style={{ color: "#666", fontSize: "11px" }}>
          {msg.timestamp}
        </small>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          marginTop: "5px",
          display: "flex",
          gap: "6px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => deleteForMe(msg.id)}
          style={{
            padding: "4px 8px",
            borderRadius: "6px",
            border: "none",
            background: "#ff4d4d",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Delete
        </button>

        <button
          onClick={() => deleteForEveryone(msg.id)}
          style={{
            padding: "4px 8px",
            borderRadius: "6px",
            border: "none",
            background: "#ff9900",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Delete For All
        </button>

        <button
          onClick={() => togglePin(msg.id)}
          style={{
            padding: "4px 8px",
            borderRadius: "6px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          {msg.pinned ? "Unpin" : "Pin"}
        </button>
      </div>
    </div>
  );
}

export default Message;