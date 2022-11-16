import React from "react";
import Information from "./Information";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  const container = {
    width: "100%",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "fit-content",
    marginTop: "120px",
  };
  const container2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const image2 = {
    width: "355px",
    height: "355px",
    borderRadius: "50%",
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  const iconbox = { display: "flex", flexDirection: "row", gap: "15px" };

  return (
    <div>
      <div id="about" style={container}>
        <div style={container2}>
          <div>
            <img
              style={image2}
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGeP0WYsObuUQ/profile-displayphoto-shrink_200_200/0/1632045422645?e=1668643200&v=beta&t=0mOQXJG5yv4RlqQbHJzOcZN2-4MWJpdC0882lGj9oBI"
              alt=""
            />
          </div>
          <div className="icons" style={iconbox}>
            <a
              className="a"
              href="https://wa.me/+201126593028"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaWhatsapp color="green" size={40} />{" "}
            </a>
            <a
              className="a"
              href="https://www.instagram.com/omar.a.mohamady"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaInstagram color="rgb(251, 57, 88)" size={40} />{" "}
            </a>
            <a
              className="a"
              href="https://github.com/Mohamady1"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub color="black" size={40} />{" "}
            </a>
            <a
              className="a"
              href="https://www.linkedin.com/in/omar-ahmed-mohamady-9a56661a3/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin color="blue" size={40} />{" "}
            </a>
          </div>
        </div>
        <div>
          <Information />
        </div>
      </div>
    </div>
  );
}

export default About;