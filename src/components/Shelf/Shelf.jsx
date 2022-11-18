import React, { memo } from "react";
import "./Shelf.css";

function Shelf({ shelf }) {
  return (
    <div>
      <h1 className="shelfStyle">{shelf}</h1>
    </div>
  );
}

export default memo(Shelf);
