import React from "react";
import Nav from "../Nav/Nav";
import Certifcates from "../Certificates/Certifcates";
import About from "../About/About";
import Shelf from "../Shelf/Shelf";
import Sidebar from "../Nav/Sidebar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function Home() {
  //Styles
  const text_info = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "rgba(255, 255, 255, 0.103)",
    borderRadius: "20px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    justifyContent: "center",
    alignItems: "center",
  };
  const note = {
    color: "white",
    width: "fit-content",
    backgroundColor: "rgba(0,0,0, 0.803)",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "15px",
  };

  return (
    <div id="sidebar">
      <Sidebar pageWrapId={"home"} outerContainerId={"sidebar"} />
      <div>
        <Nav />
      </div>
      <About />
      <Shelf shelf="Certificates" />
      <Certifcates />
      <Shelf shelf="Projects" />
      <Projects />
      <Shelf shelf="My Skills" />
      <Skills />
    </div>
  );
}

export default Home;
