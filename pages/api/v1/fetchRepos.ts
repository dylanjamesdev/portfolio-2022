"use strict";

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function getRepos(
  _req: NextApiRequest,
  res: NextApiResponse
) {
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

    return res.json(repos);
  } catch (e: any) {
    console.log(`[Fetch Error] /api/v1/fetchRepos: ${e.message}`);
    let repos = [
      {
        name: "Fetch Error",
        description: `A temporary api error has occurred while fetching the data. ${e.message}.`,
      },
    ];

    return res.json(repos);
  }
}
