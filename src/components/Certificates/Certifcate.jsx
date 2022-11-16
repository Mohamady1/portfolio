import React, { memo } from "react";

function Certifcate({ image, paragraph }) {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "369px",
    boxShadow: "2px 2px 2px red",
  };

  const info_me = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={container}>
      <div>
        <img
          className="zoom"
          style={{ height: "100%", width: "100%" }}
          src={image}
          alt=""
        />
      </div>
      <div style={{ height: "100%" }}>
        <p style={info_me}>{paragraph}</p>
      </div>
    </div>
  );
}

export default memo(Certifcate);
