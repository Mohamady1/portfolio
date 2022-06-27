import React from "react";

function Information() {
  const h3 = {
    padding: "25px",
    borderRadius: "20px",
    lineHeight: "1.5",
    backgroundColor: "rgba(255,255,255, 0.100)",
    color: "white",
  };
  const ul = {
    padding: "5px",

    width: "fit-content",
    boxShadow: "3px 3px 3px red",
  };

  return (
    <div>
      <h3 style={h3}>
        Hello, my name is Omar Ahmed Mohamady based on (Cairo, Egypt), I am a
        high school student at iTech School for Applied Technology.
        <br />I love programming since I was a kid and the dream is getting
        bigger and bigger day by day.
        <br />I Learned a lot El-Hamdullah such as:
        <ul style={ul}>
          <li>Data Analysis (Udacity)</li>
          <li>Android Development (Udacity)</li>
          <li>Front-End Web Development (Udacity)</li>
        </ul>
        Go here and see more information about my Certificates{" "}
        <a className="anchor" href="#certifcates">
          Click
        </a>
      </h3>
    </div>
  );
}

export default Information;
