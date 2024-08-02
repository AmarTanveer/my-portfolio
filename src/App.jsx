import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";
import "./App.css";
function App() {
  return (
    <div className="main">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;
