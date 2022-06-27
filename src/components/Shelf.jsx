import React, { memo } from "react";

function Shelf({ shelf }) {
  return (
    <div>
      <h1
        style={{
          marginLeft: "20px",
          color: "white",
          marginTop: "20px",
          borderBottom: "3px solid rgba(225,225,255,0.655)",
          width: "fit-content",
        }}
      >
        {shelf}
      </h1>
    </div>
  );
}

export default memo(Shelf);
