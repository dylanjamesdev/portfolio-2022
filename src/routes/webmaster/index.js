"use strict";

let route = require("express").Router();

route.get("/", (req, res) => {
  return res.render("webmaster");
});

module.exports = route;
