"use strict";

import { Router, Request, Response } from "express";
import config from "../../config";

import index from "./index";
import webmaster from "./webmaster";

let route = Router();

route.use("/", index);
route.use("/webmaster", webmaster);

route.get("/:slug", (req: Request, res: Response) => {
  for (let i = 0; i < config.redirects.length; i++) {
    if (config.redirects[i].slug === req.params.slug) {
      return res.redirect(config.redirects[i].url);
    }
  }
  return res.status(404).json({
    code: 404,
    message: "The requested resource could not be found.",
  });
});

export default Router;
