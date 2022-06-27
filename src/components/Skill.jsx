import React, { useEffect, useRef, useState, memo } from "react";

function Skill({ widthCo }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const all = ref.current.getBoundingClientRect().top;
      if (all >= 0 && all <= 900) {
        setWidth(widthCo);
      } else {
        setWidth(0);
      }
    });
  }, [widthCo]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "300px",
        height: "30px",
        backgroundColor: "white",
        margin: "10px",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          height: "100%",
          width: width,
          backgroundColor: "indianred",
          transition: "1s linear",
        }}
      ></span>
    </div>
  );
}

export default memo(Skill);
