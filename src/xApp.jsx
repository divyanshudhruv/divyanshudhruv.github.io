import React from "react";

import "./style.css";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import AboutWhy from "./about-why";
import Projects from "./projects";
import Languages from "./languages";
import Form from "./form";
import RateIt from "./rate-it";
import Footer from "./footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Home />
        <About />
        <AboutWhy />
        <Projects />
        <Languages />
        <Form />
        <RateIt />
        <Footer />
      </div>
    </>
  );
}
