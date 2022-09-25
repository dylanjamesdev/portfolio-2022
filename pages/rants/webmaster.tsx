"use strict";

import Hero from "../../components/Content/Webmaster/Hero";
import Text from "../../components/Content/Webmaster/Text";

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
