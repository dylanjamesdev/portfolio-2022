"use strict";

import Hero from "../../components/Content/Webmaster/Hero";
import Text from "../../components/Content/Webmaster/Text";
import CommentPanel from "../../components/Comments/Panel";

const Webmaster = () => {
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className="animate__animated animate__fadeInUp container">
        <Hero />
        <Text />
        <CommentPanel url={"/rants/webmaster"} />
      </div>
    </body>
  );
};

export default Webmaster;
