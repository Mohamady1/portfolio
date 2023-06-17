import React, { useState } from "react";
import Project from "./Project";
import projects from "./projectsApi";
import Techs from "./Techs";
import "./Projects.css";

function Projects() {
  const [dataa, setDataa] = useState(projects);

  const reactNativeView = () => {
    setDataa(
      projects.filter((project) => project.technology === "React Native")
    );
  };

  const allView = () => {
    setDataa(projects);
  };
  const flutterView = () => {
    setDataa(projects.filter((project) => project.technology === "Flutter"));
  };

  return (
    <div>
      <div className="projectsIcon">
        <button className="allBtn" onClick={allView}>
          All
        </button>
        <Techs
          exc={reactNativeView}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          tech="React Native"
        />
        <Techs
          exc={flutterView}
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
          tech="Flutter"
        />
      </div>
      <div className="projectsContainer" id="projects">
        {dataa.length !== 0 ? (
          dataa.map((project) => (
            <Project
              link={project.link}
              key={project.id}
              name={project.name}
              tech={project.technology}
              picture={project.picture}
              info={project.info}
            />
          ))
        ) : (
          <h1 style={{ fontFamily: "Cursive" }}>Soon 🤫🔜</h1>
        )}
      </div>
    </div>
  );
}

export default Projects;
