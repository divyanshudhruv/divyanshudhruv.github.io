import React, { useState } from "react";
import "./rate-it.css";

export default function RateIt() {
  // State to track the value of the input
  const [textValue, setTextValue] = useState("");

  // Handle change in input field
  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Log the text input value

    // Construct the GitHub issue URL with the input value
    const issueTitle = encodeURIComponent("⭐ Rating Portfolio Site");
    const issueBody = encodeURIComponent(
      `👋 Hello, I would like to rate the portfolio site: ${textValue}`
    );
    const issueUrl = `https://github.com/divyanshudhruv/divyanshudhruv.github.io/issues/new?title=${issueTitle}&body=${issueBody}`;

    // Open the GitHub issue
    window.open(issueUrl, "_blank");
  };

  return (
    <>
      <div className="contact">
        <div className="textBig">Rate the portfolio</div>
        <br />
        <div className="textMid">
          Share your thoughts and rate the portfolio to help improve and
          showcase the work better.
        </div>
        <br /> <br />
        <input
          type="text"
          name="text"
          id="textInput"
          className="input"
          placeholder="TEXT"
          value={textValue} // Bind the input value to state
          onChange={handleInputChange} // Handle input changes
        />
        <br />
        <div className="button" onClick={handleButtonClick}>
          SEND —
        </div>
        <br />
        <div className="socials">
          <div
            className="item"
            onClick={() =>
              window.open("https://github.com/divyanshudhruv", "_blank")
            }
          >
            <i className="ri-github-line"></i>
          </div>
          <div
            className="item"
            onClick={() =>
              window.open("https://codepen.io/divyanshudhruv", "_blank")
            }
          >
            <i className="ri-codepen-line"></i>
          </div>
          <div
            className="item"
            onClick={() =>
              window.open(
                "mailto:divyanshudhruv.github@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about..."
              )
            }
          >
            <i className="ri-mail-line"></i>
          </div>
        </div>
      </div>
    </>
  );
}
