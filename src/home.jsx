import React from "react";
import "./home.css";
export default function Home() {
  const scrollToSection = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="home">
        <div className="textSmall">Divyanshu Dhruv</div>
        <br />
        <div className="textBig">Driven by Code</div>
        <br />
        <div className="textMid">
          Simple, beautiful, and powerful sites with code.
        </div>
        <br /> <br />
        <br />
        <div className="button" onClick={scrollToSection}>
          HEHE —
        </div>
      </div>
    </>
  );
}
