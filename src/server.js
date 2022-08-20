  "use strict";
  
  const express = require("express");

  let app = express();
  let port = 80;

  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.disable("x-powered-by");
  app.set("view engine", "ejs");
  app.set("views", "./views");
  app.set("daddy", "dylan");

  app.get("/", (req, res) => {
   return res.render("index");
  });

  app.get("/webmaster", (req, res) => {
    return res.render("webmaster");
  });

  app.get("*", (req, res) => {
    return res.end();
  });

  app.listen(port, () => {
    console.log(`[Portfolio] Server is running on port ${port}.`);
  });
