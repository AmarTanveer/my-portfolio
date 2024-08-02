import React from "react";
import "./Sidebar.css";
import "../index.css";
import Content from "../content/Content";

function Sidebar() {
  function scrollTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="Sidebar">
      <p onClick={() => scrollTo("intro")} style={{cursor: "pointer"}}>
        A<span style={{ color: "var(--blue)" }}>.</span>
      </p>

      <h3 onClick={() => scrollTo("about")}  style={{cursor: "pointer"}}>About</h3>
      <h3 onClick={() => scrollTo("projects")}  style={{cursor: "pointer"}}>Projects</h3>
      <h3 id="experiencenav" onClick={() => scrollTo("experience")}  style={{cursor: "pointer"}}>
        Exp.
      </h3>
      <h3 onClick={() => scrollTo("contactme")}  style={{cursor: "pointer"}}>Contact</h3>
    </div>
  );
}

export default Sidebar;
