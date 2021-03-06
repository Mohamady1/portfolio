import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { AiFillPhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Contactme() {
  const [word, setWord] = useState("");
  const form = useRef();

  const container = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    position: "absolute",
    height: "fit-content",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  const form_container = {
    borderRadius: "20px",
    width: "60%",
    padding: "30px",
    height: "300px",
    background: "linear-gradient(black, white)",
  };

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
      <div style={{ height: "150px" }}>
        <Nav />
      </div>
      {/* ------------------------------------------- */}
      <div style={container}>
        {/* Word */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1>Get in Touch</h1>
            <AiFillPhone size={25} />
          </div>
          <FiMail size="200" />
          <p>Leave me a message and I will reply as soon as possible</p>
        </div>
        <div style={form_container}>
          {/*Container*/}
          <div>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              ref={form}
              onSubmit={sendEmail}
            >
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
