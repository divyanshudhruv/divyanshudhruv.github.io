import React from "react";
import "./about.css";
export default function About() {
  return (
    <>
      <div className="about"id="about">
        <div className="leftC">
          <div className="textTop">About Me</div>
          <div className="textBottom">
            I design websites. That's the long and short of it. UI and UX,
            Python, and pretty decent HTML and CSS — with Javascript and that
            nice dabble with Java.
            <br />
            <span>I build sites that;</span>
          </div>
        </div>
        <div className="rightC">
          <div className="image"></div>
        </div>
      </div>
    </>
  );
}
