"use strict";

export default function MainAlert() {
  return (
    <div
      className="animate__animated animate__fadeInUp alert alert"
      style={{
        backgroundColor: "rgb(71, 71, 172)",
        color: "white",
      }}
      role="alert"
    >
      If you read anything from my site, I suggest{"  "}<u><a href="/rants/webmaster" style={{ color: "white" }}>starting here</a>.</u>
    </div>
  );
}
