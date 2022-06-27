import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  const [display, setDisplay] = useState(false);
  const [navbg, setNavbg] = useState(false);

  const btnStyle = {
    position: "fixed",
    bottom: "40px",
    right: "25px",
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "red",
    padding: "9px",
    borderRadius: "50%",
    border: "2px solid white",
    cursor: "pointer",
    borderColor: "red",
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    });
  }, []);

  return (
    <>
      <div className={navbg ? "navactive" : "navlink"}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <h1 className="name" style={{ fontFamily: "Cursive" }}>
              Omar Ahmed Mohamady
            </h1>
            <h3>My Portfolio 🤲👩‍💻</h3>
          </div>
        </div>
        <nav className="nav">
          <button className="button">
            <Link to="/"> Home </Link>
          </button>

          <button className="button">
            <a href="/#about">About</a>
          </button>

          <button className="button">
            <a href="/#certifcates">Certificates</a>
          </button>
          <button className="button">
            <a href="/#projects">Projects</a>
          </button>
          <button className="button">
            <a href="/#skills">Skills</a>
          </button>
          <button className="button">
            <Link to="/contactme"> Contact Me</Link>
          </button>
        </nav>
        <>
          {display && (
            <button
              style={btnStyle}
              onClick={() => (document.documentElement.scrollTop = 0)}
              className="fas fa-arrow-up"
            ></button>
          )}
        </>
      </div>
    </>
  );
}

export default Nav;
