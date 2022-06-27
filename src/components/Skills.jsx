import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div
      id="skills"
      style={{
        color: "white",
        marginTop: "50px",
        height: "fit-content",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <h3> HTML</h3>
        <Skill widthCo="97%" />
        <h3> CSS</h3>
        <Skill widthCo="95%" />
        <h3> JavaScript</h3>
        <Skill widthCo="93%" />
        <h3> Git & Github</h3>
        <Skill widthCo="90%" />
        <h3> React</h3>
        <Skill widthCo="94%" />
      </div>
      <div>
        <h3> React Native</h3>
        <Skill widthCo="70%" />
        <h3> Redux</h3>
        <Skill widthCo="80%" />
        <h3> NodeJS</h3>
        <Skill widthCo="65%" />
        <h3> Java </h3>
        <Skill widthCo="85%" />
        <h3> MySQL</h3>
        <Skill widthCo="90%" />
      </div>
    </div>
  );
}

export default Skills;
