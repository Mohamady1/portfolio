import React from "react";

const Skill = ({ src, alt }) => {
  return (
    <div>
      <div className="skillImage">
        <img src={src} alt={alt} />
      </div>
      <div className="skillTitle">
        <h2>{alt}</h2>
      </div>
    </div>
  );
};

export default Skill;
