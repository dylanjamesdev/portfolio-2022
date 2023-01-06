"use strict";

import MainAlert from "../../Alerts/Main";

export default function HomeHero() {
  return (
    <section className="landing">
      <div className="row vertical-center" id="landing">
        <div className="col-lg-8 text-left pb-5">
          <MainAlert />
          <h1 className="animate__animated animate__fadeInUp display-1">
            Dylan {"  "}
            <span style={{ color: "rgb(71, 71, 172)" }}>James</span>
          </h1>
          <div className="animate__animated animate__fadeInUp">
            <p className="animate__animated animate__fadeInUp lead pl-2 text-white">
              Software Engineer & SysAdmin
              <br />
              Declare variables, not war.
            </p>
            <br />
            <img
              className="animate__animated animate__fadeInUp"
              style={{ textAlign: "center" }}
              src="https://spotify-recently-played-readme.vercel.app/api?user=c36ygm5hg7d35z2e445a4ig7u&count=4"
            />
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp col-lg-4 text-center my-auto pb-5 rounded-circle">
          <img className="img-fluid rounded-circle" src="/avatar.webp" />
        </div>
      </div>
    </section>
  );
}
