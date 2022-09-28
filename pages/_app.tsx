"use strict";

import initConnection from "../db/initConn";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Nav/Footer";

import ReactPlayer from "react-player";

function Portfolio({ Component, pageProps }) {
  initConnection();

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ReactPlayer url="https://www.youtube.com/playlist?list=PLe0sO1QaRc9rX_YCF6y6Nck5gshxz_DoI" />
    </>
  );
}

export default Portfolio;
