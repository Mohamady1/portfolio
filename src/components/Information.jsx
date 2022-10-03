import React from "react";

function Information() {
  const h3 = {
    padding: "25px",
    borderRadius: "20px",
    lineHeight: "1.5",
    backgroundColor: "rgba(255,255,255, 0.500)",
    color: "white",
  };

  return (
    <div style={{ padding: "5px" }}>
      <p style={h3}>
        Hello, my name is Omar Ahmed Mohamady based in (Cairo, Egypt), I'm a
        P-TECH Student at I-TECH School for Applied Technology.
        <br />
        <br />I have Knowledge about these Fields:
        <ul>
          <li>Data Analysis (Udacity)</li>
          <li>Android Development (Udacity)</li>
          <li>Front-End Web Development (Udacity)</li>
        </ul>
      </p>
    </div>
  );
}

export default Information;
