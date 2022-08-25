import { Router, Request, Response } from "express";

let route = Router();

route.get("/", (_req: Request, res: Response) => {
  return res.render("rants/webmaster");
});

export default route;

