import React from "react";
import "./App.css";
import logo from "./Images/reactjs-icon 2.png"
import logoheader from "./Images/reactjs-icon.png"
import bullet from "./Images/bullet points.png"

export default function App() {
  return (
    <>
      <div className="Main-Body">
        <div className="header">
          <img src={logoheader} alt="LogoHeader" />
          <h2>ReactFacts</h2>
          <h3>React Course - Project 1</h3>
        </div>
        <div className="content-container">
          <h1>Fun facts about React</h1>
          {/* <img src={bullet} alt="Bullet" /> */}
          <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
          </ul>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </>
  );
}
