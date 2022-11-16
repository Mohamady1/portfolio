import React, { useState } from "react";
import Project from "./Project";
import projects from "./projectsApi";

function Projects() {
  const [dataa, setDataa] = useState(projects);

  const reactView = () => {
    setDataa(projects.filter((project) => project.technology === "React"));
  };
  const reactNativeView = () => {
    setDataa(
      projects.filter((project) => project.technology === "React Native")
    );
  };
  const allView = () => {
    setDataa(projects);
  };
  const vanillaView = () => {
    setDataa(projects.filter((project) => project.technology === "Vanilla"));
  };
  const vueView = () => {
    setDataa(projects.filter((project) => project.technology === "Vue"));
  };
  const flutterView = () => {
    setDataa(projects.filter((project) => project.technology === "Flutter"));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "55px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            fontFamily: "cursive",
            fontSize: "25px",
          }}
          onClick={allView}
        >
          All
        </button>
        <div onClick={reactView}>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt=""
          />
          <h3 style={{ fontFamily: "Cursive", cursor: "pointer" }}>React</h3>
        </div>
        <div onClick={reactNativeView}>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt=""
          />
          <h3 style={{ fontFamily: "Cursive", cursor: "pointer" }}>
            React Native
          </h3>
        </div>
        <div onClick={vanillaView}>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt=""
          />
          <h3 style={{ fontFamily: "Cursive", cursor: "pointer" }}>Vanilla</h3>
        </div>
        <div onClick={flutterView}>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
            alt=""
          />
          <h3 style={{ fontFamily: "Cursive", cursor: "pointer" }}>Flutter</h3>
        </div>
        <div onClick={vueView}>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
            alt=""
          />
          <h3 style={{ fontFamily: "Cursive", cursor: "pointer" }}>Vue</h3>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "55px",
          margin: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="projects"
      >
        {dataa.length !== 0 ? (
          dataa.map((project) => (
            <Project
              link={project.link}
              key={project.id}
              name={project.name}
              picture={project.picture}
              info={project.info}
            />
          ))
        ) : (
          <h1 style={{ fontFamily: "Cursive" }}>
            I will Make Project Here Soon
          </h1>
        )}
      </div>
    </div>
  );
}

export default Projects;
