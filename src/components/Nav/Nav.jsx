import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Nav() {
  const [navbg, setNavbg] = useState(false);

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
            <a href="/#about">Home</a>
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
      </div>
    </>
  );
}

export default Nav;
