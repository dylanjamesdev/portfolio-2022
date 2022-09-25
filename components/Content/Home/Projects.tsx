"use strict";

import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        let org_repos = await axios.get(
          "https://api.github.com/orgs/team-tritan/repos"
        );

        let user_repos = await axios.get(
          "https://api.github.com/users/dylanjamesdev/repos"
        );

        let repos = org_repos.data
          .concat(user_repos.data)
          .sort((a, b) => b.size - a.size)
          .filter((i) => !i.fork)
          .slice(0, 9);

        setRepos(repos);
      } catch (e: any) {
        console.log(`[Fetch Error] /api/v1/fetchRepos: ${e.message}`);
        let repos = [
          {
            name: "Fetch Error",
            description: `A temporary api error has occurred while fetching the data. ${e.message}.`,
          },
        ];
        setRepos(repos);
      }

      setIsLoading(false);
    }
    fetchRepoData();
  }, []);

  if (isLoading) {
    return (
      <section className="animate__animated animate__fadeInUp">
        <h1 className="display-4 mt-5">Some of my projects</h1>
        <p className="lead pl-2 text-white">
          These are fetched from the Github API and are not featured
          purposefully.
        </p>
        <div className="row mt-5 mb-5">
          <div className="col-md-4">
            <div className="blog-entry">
              <img
                className="img-fluid"
                src="https://avatars.githubusercontent.com/u/99157898?s=400&u=f012e21f0bdfe3d999b6cbdb644342cdce76751f&v=4"
              />
              <div className="text p-4 d-block">
                <div className="meta mb-3">
                  <h3 className="heading">
                    Fetching Data
                    <br />
                    <br />
                    <p className="lead text-white">
                      The client is currently fetching data from the API.
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="animate__animated animate__fadeInUp">
      <h1 className="display-4 mt-5">Some of my projects</h1>
      <p className="lead pl-2 text-white">
        These are fetched from the Github API and are not featured purposefully.
      </p>
      <div className="row mt-5 mb-5">
        {repos.map((repo) => (
          <div className="col-md-4">
            <div className="blog-entry">
              <a href={repo.html_url}>
                <img
                  className="img-fluid"
                  src="https://avatars.githubusercontent.com/u/99157898?s=400&u=f012e21f0bdfe3d999b6cbdb644342cdce76751f&v=4"
                />
              </a>
              <div className="text p-4 d-block">
                <div className="meta mb-3">
                  <div style={{ color: "grey" }}>{repo.language}</div>
                  <h3 className="heading">
                    <a
                      className="link"
                      style={{ color: "white" }}
                      href={repo.html_url}
                    >
                      {repo.name}
                    </a>
                    <br />
                    <br />
                    <p className="lead text-white">{repo.description}</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
