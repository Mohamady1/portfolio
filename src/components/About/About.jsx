import React from "react";
import Information from "./Information";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutContainer2">
        <div>
          <img
            className="image2"
            src="https://sdk.bitmoji.com/render/panel/10226021-100639437520_6-s5-v1.webp?transparent=1&scale=0"
            alt=""
          />
        </div>
        <div className="iconbox">
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
  );
}

export default About;
