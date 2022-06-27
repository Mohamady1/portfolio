import React from "react";
import Certifcate from "./Certifcate";
import Access from "../img/access.jpg";
import Power from "../img/powerpoint.jpg";
import Android from "../img/android.png";
import C from "../img/c.jpg";
import Challanger from "../img/challanger.png";
import Data from "../img/dataanalysis.png";
import Advanced from "../img/frontadvanced.png";
import Professional from "../img/frontprofessional.png";
import IT from "../img/intec.jpg";

function Certifcates() {
  const container = {
    marginTop: "50px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
  };

  return (
    <div id="certifcates" style={container}>
      <Certifcate
        image={Power}
        paragraph="Microsoft Office Specialist, Microsoft PowerPoint 2010"
      />
      <Certifcate
        image={Access}
        paragraph="Microsoft Office Specialist, Microsoft Access 2010"
      />
      <Certifcate image={IT} paragraph="IT Essentials from cisco" />
      <Certifcate image={C} paragraph="Basics of C++ Programming Language" />
      <Certifcate
        image={Data}
        paragraph="Data Analysis by Structure Query Language ( SQL ) with Udacity"
      />
      <Certifcate
        image={Android}
        paragraph="Android Application Development by (android studio by Java) with Udacity"
      />
      <Certifcate
        image={Challanger}
        paragraph="Challanger web track (html, css, wordpress) with Udacity"
      />
      <Certifcate
        image={Professional}
        paragraph="Professional Front-End track (javascript, JS&DOM, API&Asynchronous) with Udacity"
      />
      <Certifcate
        image={Advanced}
        paragraph="Advanced Front-End track (React, Redux, webpack) with Udacity"
      />
    </div>
  );
}

export default Certifcates;
