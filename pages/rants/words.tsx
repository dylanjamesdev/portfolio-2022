"use strict";

import Hero from "../../components/Content/Words/Hero";
import Text from "../../components/Content/Words/Text";

export default function WebmasterRant() {
  return (
    <body style={{ backgroundColor: "black" }}>
      <div className="animate__animated animate__fadeInUp container">
        <Hero />
        <Text />
      </div>
    </body>
  );
}
