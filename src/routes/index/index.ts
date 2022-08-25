import { Router, Request, Response } from "express";

let route = Router();
let axios = require("axios");

route.get("/", async (_req: Request, res: Response) => {
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
      .slice(0, 15);

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

export default route;
