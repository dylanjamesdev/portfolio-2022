"use strict";

let route = require("express").Router();
let config = require("../../config");

route.use("/", require("./index"));
route.use("/webmaster", require("./webmaster"));

route.get("/:slug", (req, res) => {
  for (let i = 0; i < config.redirects.length; i++) {
    if (config.redirects[i].slug === req.params.slug) {
      return res.redirect(config.redirects[i].url);
    }
  }

  // if no redirect is found, return 404
  return res.status(404).json({
    code: 404,
    message: "The requested resource could not be found.",
  });
});

module.exports = route;
