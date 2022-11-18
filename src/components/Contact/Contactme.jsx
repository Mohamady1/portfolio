import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../Nav/Nav";
import Sidebar from "../Nav/Sidebar";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import "./Contact.css";

function Contactme() {
  const [word, setWord] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target[1].value === "" ||
      e.target[2].value === "" ||
      e.target[3].value === ""
    ) {
      setWord("Fill All Fields");
      e.target.reset();
    } else {
      emailjs
        .sendForm(
          "service_zwsk3na",
          "template_5xsg6hk",
          form.current,
          "iS622J5PQ8nWAaLVG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
      setWord("Sent Successfully");
    }
  };

  return (
    <div id="sidebar" className="contact">
      <Sidebar pageWrapId={"contact"} outerContainerId={"sidebar"} />
      <div>
        <Nav />
      </div>
      {/* ------------------------------------------- */}
      <div className="contactContainer">
        {/* Word */}
        <div className="infoContainer">
          <div className="infoLogoContainer">
            <h1>Get in Touch</h1>
            <AiFillPhone color="black" size={25} />
          </div>
          <FiMail color="black" size="200" />
          <p style={{ fontFamily: "cursive" }}>
            Leave me a message and I will reply as soon as possible
          </p>
        </div>
        <div className="formContainer">
          {/*Container*/}
          <div>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              {/* name and email */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <span className="span">Name</span>
                <input placeholder="Name" name="user_name" />
                <span className="span">E-mail</span>
                <input placeholder="Email" name="user_email" />
              </div>
              {/* message */}
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <span className="span">Message</span>
                <textarea
                  style={{ width: "100%", resize: "none" }}
                  name="message"
                  placeholder="type your message here"
                />
              </div>
              {/* button */}
              <div>
                <input className="contactbtn" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div>
            <h3 style={{ color: word === "Fill All Fields" ? "red" : "black" }}>
              {word}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
