import React from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skillsContainer">
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
        alt="TypeScript"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        alt="Java"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg"
        alt="Dart"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="HTML5"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="CSS3"
      />
      <Skill
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="Git"
      />
      <Skill
        src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github"
        alt="Github"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        alt="React"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
        alt="Redux"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        alt="React Native"
      />
      <Skill
        src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
        alt="Firebase"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
        alt="Flutter"
      />
    </div>
  );
}

export default Skills;
