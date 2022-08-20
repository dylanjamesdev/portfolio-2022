"use strict";

let route = require("express").Router();
let axios = require("axios");

route.get("/", async (req, res) => {
  try {
    let org_repos = await axios.get(
      "https://api.github.com/orgs/team-tritan/repos"
    );

    let user_repos = await axios.get(
      "https://api.github.com/users/dylanjamesdev/repos"
    );

    let all_repos = org_repos.data.concat(user_repos.data);

    let repos = all_repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    let data = { repos };

    return res.render("index", data);
  } catch {
    let repos = [
      {
        name: "Fetch Error",
        description:
          "A temporary api error has occurred while fetching the data.",
      },
      {
        name: "Fetch Error",
        description:
          "A temporary api error has occurred while fetching the data.",
      },
      {
        name: "Fetch Error",
        description:
          "A temporary api error has occurred while fetching the data.",
      },
    ];

    let data = { repos };

    return res.render("index", data);
  }
});

module.exports = route;
