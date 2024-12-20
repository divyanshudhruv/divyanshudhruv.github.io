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
              <div className="h1">Gitfolio</div>
              <div className="h3">
              A dynamic github profile card generator designed to showcase key metrics and achievements.
              </div>{" "}
              <div
                className="link"
                onClick={() =>
                  window.open(
                    "https://github.com/divyanshudhruv/gitfolio",
                    "_blank"
                  )
                }
              >
                Live Demo
              </div>
            </div>
          </div>
          <div className="boxes">
            {/*  style={{ marginBottom: "20px" }} */}
            <div className="image"></div>
            <div className="bottomTextC">
              <div className="h1">Tidyfi</div>
              <div className="h3">
                A simple python program that helps you to tidy up your messy
                files and folders.
              </div>{" "}
              <div
                className="link"
                onClick={() =>
                  window.open(
                    "https://github.com/divyanshudhruv/Tidyfi",
                    "_blank"
                  )
                }
              >
                Live Demo
              </div>
            </div>
          </div>
          <div className="boxes">
            {/*   style={{ marginBottom: "20px" }} */}
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

          <div className="boxes">
            <div className="image"></div>
            <div className="bottomTextC">
              <div className="h1">Tidyfi</div>
              <div className="h3">
                A simple python program that helps you to tidy up your messy
                files and folders.
              </div>{" "}
              <div
                className="link"
                onClick={() =>
                  window.open(
                    "https://github.com/divyanshudhruv/Tidyfi",
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
