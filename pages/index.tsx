"use strict";

import { useEffect } from "react";
import AboutMe from "../components/Content/Home/AboutMe";
import Contact from "../components/Content/Home/Contact";
import Hero from "../components/Content/Home/Hero";
import Projects from "../components/Content/Home/Projects";
import Widgets from "../components/Content/Home/Widgets";
import axios from "axios";

const Home = ({ repos }) => {
  return (
    <>
      <body style={{ backgroundColor: "black" }}>
        <div className="container">
          <Hero />
          <AboutMe />
          <Projects data={{ repos }} />
          <Widgets />
          <Contact />
        </div>
      </body>
    </>
  );
};

Home.getInitialProps = async (repos) => {
  const response = await fetch(`${process.env.BASE_URL}/api/v1/fetchRepos`);
  const reqData = await response.json();

  return {
    repos: reqData,
  };
};

export default Home;
