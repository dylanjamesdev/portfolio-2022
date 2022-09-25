"use strict";

import { NextApiResponse, NextApiRequest } from "next";
import initConnection from "../../../db/initConn";
import dataModel from "../../../db/dataModel";

export default async function NewComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  initConnection();

  if (req.method == "POST") {
    let { content, time, date, url } = req.body;

    if (!content || !time || !date || !url) {
      return res.status(400).json({
        error: true,
        message: "Missing required information to post successfully.",
      });
    }

    const succ = new dataModel({
      url: url,
      time: time,
      date: date,
      content: content,
    })
      .save()
      .catch((e) => console.error(e));

    return res.json(succ);
  } else {
    return res.json({ error: 401, message: "Method not allowed." });
  }
}
