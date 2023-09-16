import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [question, setquestion] = useState([]);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e) => {
    console.log(JSON.stringify({ text: message }));
    setIsTyping(true);
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
      setIsTyping(false);
      setquestion((prev)=>[message,...prev])
      setOutput((prev) => [ data.reply,...prev]);
      setMessage("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbotWrapper">
        <h1>Chatbot</h1>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            placeholder="enter your message"
            className="search"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <div className={isTyping ? "" : "hide"}>
          <p>
            <i>{isTyping ? "Typing" : ""}</i>
          </p>
        </div>
        <section>
          {output && output.length
            ? output.map((chat, index) => (
                <p key={index} className={chat ? "output" : ""}>
                  <span>
                    <b>Question:</b>
                  </span>
                  <span>{question[index]}</span>
                  <span><br></br>
                    <b>Reply:</b>
                  </span>
                  <span>{chat}</span>
                </p>
              ))
            : ""}
        </section>

        {error && <div className="error">Error: {error}</div>}
      </div>
    </div>
  );
}

export default Chatbot;
