import React, { memo } from "react";

function Project({ picture, name, tech, info, link }) {
  return (
    <div className="projectContainer">
      <div>
        <div className="projectImageContainer">
          <img
            className="webView"
            style={{ width: "365px", transition: "all 20s ease" }}
            src={picture}
            alt=""
          />
        </div>
        <div className="projectInfoContainer">
          <h1 style={{ color: "rgb(126, 21, 21)", marginBottom: "10px" }}>
            {name}
          </h1>
          <p>{info}</p>
          {tech !== "React Native" && (
            <button className="projectBtn">
              <a
                style={{ fontFamily: "Cursive" }}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Project);
