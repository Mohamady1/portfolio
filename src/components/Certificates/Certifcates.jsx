import React from "react";
import Certifcate from "./Certifcate";
import Access from "../../img/Certificates/access.jpg";
import Power from "../../img/Certificates/powerpoint.jpg";
import Android from "../../img/Certificates/android.png";
import C from "../../img/Certificates/c.jpg";
import Challanger from "../../img/Certificates/challanger.png";
import Data from "../../img/Certificates/dataanalysis.png";
import Advanced from "../../img/Certificates/frontadvanced.png";
import Professional from "../../img/Certificates/frontprofessional.png";
import IT from "../../img/Certificates/intec.jpg";
import ReactNAtive from "../../img/Certificates/reactnative.jpg";

function Certifcates() {
  return (
    <div id="certifcates" className="certificatesContainer">
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
      <Certifcate
        image={ReactNAtive}
        paragraph="React Native - Practical Guide with Udemy"
      />
    </div>
  );
}

export default Certifcates;
