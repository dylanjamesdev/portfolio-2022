"use strict";

import { useState } from "react";
import AboutMe from "../components/Content/Home/AboutMe";
import Contact from "../components/Content/Home/Contact";
import Hero from "../components/Content/Home/Hero";
import Projects from "../components/Content/Home/Projects";
import Widgets from "../components/Content/Home/Widgets";
import axios from "axios";

const Home = ({ repos }) => {
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className="container">
        <Hero />
        <AboutMe />
        <Projects />
        <Widgets />
        <Contact />
      </div>
    </body>
  );
};

export default Home;
