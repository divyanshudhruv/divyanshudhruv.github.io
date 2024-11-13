import React, { useState } from "react";
import "./form.css";

export default function Nav() {
  // State to manage form values
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // Handle the issue creation on button click
  const handleCreateIssue = () => {
    // Prepare the title and body for the issue
    const issueTitle = `⚠️ Inquiry - ${name}`;
    const issueBody = `👋 Hello, I am **'${name}'**\n\n**💬 Message:** ${message}\n\n**🚀 Username:** ${username}\n\n`;

    // Create the GitHub issue URL with pre-filled data
    const issueUrl = `https://github.com/divyanshudhruv/divyanshudhruv.github.io/issues/new?title=${encodeURIComponent(
      issueTitle
    )}&body=${encodeURIComponent(issueBody)}`;

    // Open the issue creation page in a new tab
    window.open(issueUrl, "_blank");

    // Clear the form after submission
    setName("");
    setUsername("");
    setMessage("");
  };

  return (
    <>
      <div className="form">
        <div className="textTop">Contact Me</div>
        <div className="textBottom">
          Feel free to contact me for any questions, project collaborations, or
          opportunities you'd like to explore!
        </div>
        <div className="formC">
          <div className="leftC">
            <div className="textSmall">HELLO</div>
            <div className="textBig">npm msg</div>
            <div className="textMid">
              Please share your details below to get in touch, discuss potential
              collaborations, ask any questions, or explore exciting
              opportunities together. Let's code!
              <br />
              <ul>
                <li>Open-source collaborations</li>
                <li>Freelance opportunities</li>
              </ul>
            </div>
          </div>
          <div className="rightC">
            <input
              type="text"
              name="name"
              id="Formname"
              className="input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              spellCheck="false"
              required
            />
            <input
              type="text"
              name="username"
              id="Formusername"
              className="input"
              placeholder="GitHub Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              spellCheck="false"
              required
            />
            <textarea
              type="text"
              name="message"
              id="Formmessage"
              className="input"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              spellCheck="false"
              required
            />
            <div className="button" onClick={handleCreateIssue}>
              SEND —
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
