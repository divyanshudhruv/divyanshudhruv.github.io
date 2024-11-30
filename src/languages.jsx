import React from "react";
import "./languages.css";
export default function Nav() {
  return (
    <>
      <div className="languages">
        <div className="textTop">My skills</div>
        <div className="textBottom">
          Showcasing my skills in development, design, problem solving, and
          across various technologies and platforms
        </div>

        <div className="languagesWhy">
          <div className="boxes">
            <div className="top">
              <div className="image">
                <i class="ri-pages-line"></i>{" "}
              </div>
            </div>
            <div className="bottom">
              <div className="textBig">Frontend development</div>
              <div className="textBottom">HTML, CSS, JavaScript, TypeScript, React.js, jQuery Tailwind, Bootstrap</div>
            </div>
          </div>
          <div className="boxes">
            <div className="top">
              <div className="image">
                <i class="ri-calendar-view"></i>
              </div>
            </div>
            <div className="bottom">
              <div className="textBig">Backend development</div>
              <div className="textBottom">Python, Java, Javascript, PHP, Node.js, Flask, Express.js, FastAPI</div>
            </div>
          </div>
          <div className="boxes">
            <div className="top">
              <div className="image">
                <i class="ri-gamepad-line"></i>{" "}
              </div>
            </div>
            <div className="bottom">
              <div className="textBig">App/Game development</div>
              <div className="textBottom">
                Java, Javascript, Python, P5.js, Dart, Flutter, Ionic
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="top">
              <div className="image">
                <i class="ri-brush-line"></i>{" "}
              </div>
            </div>
            <div className="bottom">
              <div className="textBig">UI/UX Design</div>
              <div className="textBottom">Canva, Figma, Pixso, Framer, Ant Design, IonicUI </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
