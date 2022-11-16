import React from "react";

const Skill = ({ src, alt }) => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          borderRadius: "50%",
        }}
      >
        <img style={{ width: "100px", height: "100px" }} src={src} alt={alt} />
      </div>
      <div>
        <h2 style={{ textAlign: "center", fontFamily: "Cursive" }}>{alt}</h2>
      </div>
    </div>
  );
};

export default Skill;
