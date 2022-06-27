import React from "react";
import Project from "./Project";
import projects from "./projectsApi";

function Projects() {
  return (
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
      {projects.map((project) => (
        <Project
          link={project.link}
          key={project.id}
          name={project.name}
          picture={project.picture}
          info={project.info}
        />
      ))}
    </div>
  );
}

export default Projects;
