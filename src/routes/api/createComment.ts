import { Router, Request, Response } from "express";
import fs from "fs";

let route = Router();

route.post("/", async (req: Request, res: Response) => {
  let commentText = req.body.comment;
  let path = req.body.path;

  var d = new Date();
  let date = d.toString();

  if (!commentText || !path)
    return res.json({
      code: 500,
      message: "No comment or path provided in request body.",
    });

  let constantsFile = fs.readFileSync("./data/constants.json");
  let daArray = JSON.parse(constantsFile.toString());

  daArray.comments.push({ path: path, date: date, comment: commentText });

  let newFile = JSON.stringify(daArray);

  fs.writeFile("./data/constants.json", newFile, (err) => {
    if (err) throw err;
    console.log(`New Comment Submitted: ${commentText}`);
  });

  return res.redirect(`/`);
});

export default route;
