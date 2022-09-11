import { Router, Request, Response } from "express";
import axios from "axios";

let route = Router();
var constants = require("../../data/constants.json");

route.get("/", async (_req: Request, res: Response) => {
  let path = "/";

  try {
    let org_repos = await axios.get(
      "https://api.github.com/orgs/team-tritan/repos"
    );

    let user_repos = await axios.get(
      "https://api.github.com/users/dylanjamesdev/repos"
    );

    let all_repos = org_repos.data.concat(user_repos.data);

    let repos = all_repos
      .sort((a, b) => b.size - a.size)
      .filter((i) => !i.fork)
      .slice(0, 9);

    let obj = [];

    constants.comments.forEach((element) => {
      if (element.path == path) obj.push(element);
    });

    let data = { repos: repos, comments: obj, path: path };

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

    let obj = [];

    constants.comments.forEach((element) => {
      if (element.path == path) obj.push(element);
    });

    let data = { repos, comments: obj, path: "/" };

    return res.render("index", data);
  }
});

export default route;
