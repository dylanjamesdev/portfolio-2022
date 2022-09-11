import { Router, Request, Response } from "express";

let route = Router();
var constants = require("../../data/constants.json");

route.get("/", (_req: Request, res: Response) => {
  let path = "/rants/words";
  let obj = [];

  constants.comments.forEach((element) => {
    if (element.path == path) obj.push(element);
  });

  let data = { comments: obj, path: path };

  return res.render("rants/words", data);
});

export default route;
