"use strict";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "../components/Nav/Header";
import Footer from "../components/Nav/Footer";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default Portfolio;
