"use strict";

export default function Contact() {
  return (
    <section className="animate__animated animate__fadeInUp" id="contact">
      <h1 className="display-4 mt-5">Like what you see?</h1>
      <div className="text-left">
        <div className="pt-3">
          <p className="lead pl-2 text-white">
            Feel free to reach out, I might answer if you're lucky enough!
          </p>
          <br />
          <br />
          <a
            className="btn btn-primary btn-mg"
            style={{
              backgroundColor: "transparent",
              borderColor: "rgb(71, 71, 172)",
              color: "white",
            }}
            href="https://discord.gg/http"
          >
            Join Discord
          </a>
          <a
            className="btn btn-primary btn-mg"
            style={{
              backgroundColor: "transparent",
              borderColor: "rgb(71, 71, 172)",
              color: "white",
            }}
            href="mailto:webmaster@tritan.gg"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
