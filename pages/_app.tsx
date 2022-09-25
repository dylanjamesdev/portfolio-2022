import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Nav/Footer";
import Navbar from "../components/Nav/Navbar";

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
