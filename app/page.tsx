"use client";
import "./style.css";

{
  /* cspell: disable-next-line */
}
import { SiCodepen, SiGithub, SiLinkedin } from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="containerI">
        <div className="home">
          <div className="textContainer">
            <div className="textTop">Hello!</div>
            <div className="textBottom">
              I am <br />
              Divyanshu
            </div>
            <div className="textSmall">
              Freelance web developer with 7 years experience living in India
              and working with Vercel
            </div>
          </div>
          <div className="contactContainer">
            +91 123 456 789 <br />
            divyanshudhruv@proton.me
            <br /> Gujarat, India
            <div className="iconContainer">
              <div className="icon" style={{ cursor: "pointer" }}>
                {/* cspell: disable-next-line */}

                <SiCodepen
                  size={21}
                  onClick={() =>
                    window.open("https://codepen.io/divyanshudhruv", "_blank")
                  }
                />
              </div>{" "}
              <div className="icon" style={{ cursor: "pointer" }}>
                <SiGithub
                  size={21}
                  onClick={() =>
                    window.open("https://github.com/divyanshudhruv", "_blank")
                  }
                />
              </div>{" "}
              <div className="icon" style={{ cursor: "pointer" }}>
                <SiLinkedin
                  size={21}
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/divyanshudhruv",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <div className="button">My Portfolio</div>
            <div className="button secondary">About Me</div>
          </div>
          <div className="copyrightContainer">
            {" "}
            © 2025 Divyanshu&nbsp;&nbsp;&nbsp;
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/divyanshudhruv", "_blank")
              }
            >
              ●&nbsp;&nbsp;My github
            </span>{" "}
          </div>
          <div className="freelanceContainer">
            ●&nbsp;&nbsp;Available for freelance
          </div>
        </div>
      </div>
    </>
  );
}
