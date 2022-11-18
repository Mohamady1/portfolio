import React from "react";

const Techs = ({ exc, src, tech }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={exc}>
      <img style={{ width: "50px", height: "50px" }} src={src} alt="" />
      <h3 style={{ fontFamily: "Cursive" }}>{tech}</h3>
    </div>
  );
};

export default Techs;
