"use strict";

import CommentPanel from "../../components/Comments/Panel";
import Hero from "../../components/Content/Words/Hero";
import Text from "../../components/Content/Words/Text";

export default function WebmasterRant() {
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className="animate__animated animate__fadeInUp main container">
        <Hero />
        <Text />
        <CommentPanel url={"/rants/words"} />
      </div>
    </body>
  );
}
