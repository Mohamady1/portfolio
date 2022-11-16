import React, { memo } from "react";

function Project({ picture, name, info, link }) {
  const container = {
    width: "fit-content",
    height: "560px",
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
    borderRight: "3px solid rgba(255,255,255, 0.255)",
  };

  const btn = {
    margin: "10px",
    backgroundColor: "transparent",
    border: "1px solid red",
    borderRadius: "20px",
    width: "105px",
    height: "35px",
  };

  return (
    <div className="project" style={container}>
      <div className="detail">
        <div style={{ width: "365px", height: "365px", overflow: "hidden" }}>
          <img
            className="web"
            style={{ width: "365px", transition: "all 20s ease" }}
            src={picture}
            alt=""
          />
        </div>
        <div
          style={{
            width: "365px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "195px",
          }}
        >
          <h1 style={{ color: "rgb(126, 21, 21)", marginBottom: "10px" }}>
            {name}
          </h1>
          <p>{info}</p>

          <button style={btn}>
            <a href={link} target="_blank" rel="noreferrer">
              Live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Project);
