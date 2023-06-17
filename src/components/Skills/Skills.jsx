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
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg"
        alt="Kotlin"
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
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
        alt="React Native"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
        alt="Flutter"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
        alt="Android Studio"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        alt="NodeJS"
      />
      <Skill
        src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
        alt="Firebase"
      />

      <Skill
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="Git"
      />
      <Skill
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
        alt="Github"
      />
    </div>
  );
}

export default Skills;
