import react from "react";
import "../BusinessCard.css";
import photo from "../Images/Rectangle 90.png"

export default function Info() {
  return (
    <>
      <div className="Information-container">
        <img src={photo} alt="" className="profileImg" />
        <div className="Info-container">
          <h1>Laura Smith</h1>
          <h2>Front End Developer</h2>
          <h3>laurasmith.website</h3>
          <button className="emailBtn">Email</button>
          <button className="linkedinBtn">LinkedIn</button>
        </div>
      </div>
    </>
  );
}
