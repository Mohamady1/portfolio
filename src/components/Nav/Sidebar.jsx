import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="navvv">
      <Menu right>
        <a href="/#about">Home</a>
        <a href="/#certifcates">Certificacions</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <Link to="/contactme"> Contact Me </Link>
      </Menu>
    </div>
  );
}

export default Sidebar;
