import React from "react";
import "./about-why.css";
export default function Nav() {
  return (
    <>
      <div className="aboutWhy">
        <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-fire-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Look professional</div>
            <div className="textBottom">
              Nice and clean design with cohesive and unique style.
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-bar-chart-box-ai-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Bring attention</div>
            <div className="textBottom">Increase traffic and github stars</div>
          </div>
        </div>
        <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-polaroid-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Are responsive</div>
            <div className="textBottom">
              Sites that work with any screen size.
            </div>
          </div>
        </div>
        {/* <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-settings-2-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Easliy customizable</div>
            <div className="textBottom">
              Change anything on the site within minutes.
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-flashlight-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Loads fast</div>
            <div className="textBottom">
              Built with full focus on performance.
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="top">
            <div className="image">
              <i class="ri-heart-3-line"></i>
            </div>
          </div>
          <div className="bottom">
            <div className="textBig">Is cool</div>
            <div className="textBottom">On top of that, it looks cool.</div>
          </div>
        </div> */}
      </div>
    </>
  );
}
