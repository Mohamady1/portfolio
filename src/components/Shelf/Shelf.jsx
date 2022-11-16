import React, { memo } from "react";

function Shelf({ shelf }) {
  return (
    <div>
      <h1
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          borderBottom: "3px solid rgba(0,0,0,0.655)",
          width: "fit-content",
        }}
      >
        {shelf}
      </h1>
    </div>
  );
}

export default memo(Shelf);
