import React from "react";
import "./projects.css";
export default function Nav() {
  return (
    <>
      <div className="projects">
        <div className="textTop">Latest projects</div>
        <div className="textBottom">
          Explore My Recent Work with New Designs, Advanced Features, Seamless
          Interfaces, and Modern Solutions for a Better Experience
        </div>
        <div className="projectSection">
          <div className="boxes">
            <div className="image"></div>
            <div className="bottomTextC">
              <div className="h1">Minifolio</div>
              <div className="h3">
                {" "}
                A simple, modern website template for developers with a clean
                design to showcase skills, projects, and experience.{" "}
              </div>{" "}
              <div
                className="link"
                onClick={() =>
                  window.open(
                    "https://github.com/divyanshudhruv/Minifolio",
                    "_blank"
                  )
                }
              >
                Live Demo
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="image"></div>
            <div className="bottomTextC">
              <div className="h1">Vscode UI tweaks</div>
              <div className="h3">
                A collection of custom CSS and JS tweaks designed to elevate
                your Visual Studio Code experience!
              </div>{" "}
              <div
                className="link"
                onClick={() =>
                  window.open(
                    "https://github.com/divyanshudhruv/vscode-ui-tweaks",
                    "_blank"
                  )
                }
              >
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
