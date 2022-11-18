import React, { memo } from "react";
import "./Certifcates.css";

function Certifcate({ image, paragraph }) {
  return (
    <div className="certificateContainer">
      <div>
        <img className="certificateImage" src={image} alt="" />
      </div>
      <div className="certificateDescription">
        <p className="infome">{paragraph}</p>
      </div>
    </div>
  );
}

export default memo(Certifcate);
