"use strict";

import AboutMe from "../components/Content/Home/AboutMe";
import Contact from "../components/Content/Home/Contact";
import Hero from "../components/Content/Home/Hero";
import Projects from "../components/Content/Home/Projects";
import Widgets from "../components/Content/Home/Widgets";
import Comments from "../components/Comments/Panel";

export default function Home() {
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className="main container">
        <Hero />
        <AboutMe />
        <Projects />
        <Widgets />
        <Contact />
        <Comments url={"/"} />
      </div>
    </body>
  );
}
