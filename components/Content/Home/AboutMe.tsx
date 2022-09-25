"use strict";

export default function AboutMe() {
  return (
    <section className="animate__animated animate__fadeInUp mt-5 mb-5">
      <h4 className="display-4">A little about me,</h4>
      <div className="row">
        <div className="col-lg-6 wrap text-left">
          <div className="about-desc">
            <div className="pt-5">
              <h2 className="mb-5 ">Hello!</h2>
              <p className="text-white">
                My name is Dylan, I go by Dylan James or aneurotypical around
                here. I've been playing with the internet for all of my life, I
                especially enjoyed the era of the webmaster
                <a href="/rants/webmaster">{"  "}(reference here)</a>.
                <br />
                <br />
                I've done alot of open source projects, but as of now I'm the
                owner of
                <a href="https://github.com/team-tritan">
                  {" "}
                  Team Tritan
                </a> and{" "}
                <a href="https://github.com/dylanjamesdev/tritan-bot">
                  Tritan Bot
                </a>
                . Developer at
                <a href="https://windy.pink">Windy Pink</a>. Project Manager at{" "}
                <a href="https://github.com/orgs/DefinityTeam">Definity</a>
                .
                <br />
                <br />
                I specifically enjoy backend nodejs development, but I'm also a
                huge fan of building frontend applications.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp col-lg-6 wrap align-content-center">
          <div className="row mt-5 flex-column">
            <div className="col-md-8">
              <h2 className="mb-4">Things I do</h2>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h5>Backend Engineering</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: "85%",
                      backgroundColor: "rgb(71, 71, 172)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h5>Frontend Development</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: "75%",
                      backgroundColor: "rgb(71, 71, 172)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="progress-wrap">
                <h5>Bot Development</h5>
                <div className="progress progress-style">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{
                      width: "95%",
                      backgroundColor: "rgb(71, 71, 172)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
