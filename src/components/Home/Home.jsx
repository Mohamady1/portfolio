import React from "react";
import Nav from "../Nav/Nav";
import Certifcates from "../Certificates/Certifcates";
import About from "../About/About";
import Shelf from "../Shelf/Shelf";
import Sidebar from "../Nav/Sidebar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function Home() {
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
