import React, { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  const handleSendMessage = async (e) => {
    console.log(JSON.stringify({ text: message }));
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat: message }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setOutput(data.reply);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      {output && <div>Reply: {output}</div>}

      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default Chatbot;
