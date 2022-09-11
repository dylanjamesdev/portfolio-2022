import { Router, Request, Response } from "express";

let route = Router();

route.get("/", (_req: Request, res: Response) => {
  var constants = require("../../data/constants.json");
  let path = "/rants/webmaster";
  let obj = [];

  constants.comments.forEach((element) => {
    if (element.path == path) obj.push(element);
  });

  let data = { comments: obj, path: path };

  return res.render("rants/webmaster", data);
});

export default route;
