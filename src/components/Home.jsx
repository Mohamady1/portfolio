import React from "react";
import Nav from "./Nav";
import { Typewriter } from "react-simple-typewriter";
import Certifcates from "./Certifcates";
import About from "./About";
import Shelf from "./Shelf";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  //Styles
  const image = {
    backgroundImage: `url(
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100vh",
    opacity: "0.5",
    filter: "blur(2px)",
  };
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
      <div id="home">
        <div style={image}></div>
        <div style={text_info}>
          <h1 className="myname" style={{ color: "white" }}>
            Omar Ahmed Mohamady
          </h1>
          <h3 style={note}>
            I'm{" "}
            <Typewriter
              words={[
                "Front-End Web Developer",
                "want to learn more about Mobile Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h3>
        </div>
      </div>
      <Shelf shelf="About" />
      <About />
      <Shelf shelf="Certificates in Tech Field" />
      <Certifcates />
      <Shelf shelf="Top Projects I did" />
      <Projects />
      <Shelf shelf="My Skills" />
      <Skills />
    </div>
  );
}

export default Home;
