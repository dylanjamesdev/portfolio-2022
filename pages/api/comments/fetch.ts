"use strict";

import { NextApiRequest, NextApiResponse } from "next";
import initConnection from "../../../db/initConn";
import dataModel from "../../../db/dataModel";

export default async function fetchComments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    if (!req.query.url) {
      return res.status(400).json({
        error: true,
        code: 400,
        message: "No query url provided",
      });
    } else {
      let comments = await dataModel.find({ url: req.query.url });
      return res.json(comments);
    }
  } else {
    return res.json({ error: 401, message: "Method not allowed." });
  }
}
