import React from "react";
import "./nav.css"
export default function Nav() {
  return (
    <>
      <div className="nav">
        <div className="logo"></div>
        <div className="button" onClick={() => window.open("https://github.com/divyanshudhruv", "_blank")}>Github</div>
      </div>
    </>
  );
}
