import React, { useState } from "react";
import "./Chatbot.css";
import URI from '../../URI'

function Chatbot() {
  const [message, setMessage] = useState("");
  const [question, setquestion] = useState([]);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  function handleClick(msg,e)
  {

    setMessage(msg);
  }

  const handleSendMessage = async (e) => {
    console.log(JSON.stringify({ text: message }));
    setIsTyping(true);
    e.preventDefault();

    try {
      const response = await fetch(URI+"chatbot", {
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
        <h1>AyuBot</h1>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            placeholder="enter your message"
            className="search"
            onChange={(e) => setMessage("In context of ayurveda"+e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <div className={isTyping ? "" : "hide"}>
          <p>
            <i>{isTyping ? "Typing" : ""}</i>
          </p>
        </div>
        <section className="center">
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
            : <>
            <div className="suggestions">
              <div className="output" onClick={()=>handleClick('List some ayurvedic medicine')}>
                <span>List some ayurvedic medicine</span>
              </div>
              <div className="output" onClick={()=>handleClick('Origins of ayurveda')}>
                <span>Origins of ayurveda</span>
              </div>
              <div className="output" onClick={()=>handleClick('Can you recommend natural remedies for headaches?')}>
                <span>Can you recommend natural remedies for headaches?</span>
              </div>
              <div className="output" onClick={()=>handleClick('What are some common herbs used in Ayurvedic medicine?')}>
                <span>What are some common herbs used in Ayurvedic medicine?</span>
              </div>
            </div>
            </>}
        </section>

        {error && <div className="error">Error: {error}</div>}
      </div>
    </div>
  );
}

export default Chatbot;
