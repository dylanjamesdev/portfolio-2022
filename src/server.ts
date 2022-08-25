import express from "express";
import router from "./routes/router";
import config from "../config";

const app: express.Application = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable("x-powered-by");
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", router);

app.listen(config.port, () => {
  console.log(`[Portfolio] Server is running on port ${config.port}.`);
});
