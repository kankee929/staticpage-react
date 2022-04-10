import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Info from "./Components/Info";

export default function BusinessCard() {
  return (
    <div className="main-container">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
