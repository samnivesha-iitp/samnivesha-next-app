const express = require("express");
const next = require("next");
const config = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const userRouter = require("./routes/users");
const eventRouter = require("./routes/event");

app.prepare().then(() => {
  // express code goes here
  const server = express();

  const uri = "mongodb://localhost:27017/samnivesha";
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  db = mongoose.connection;
  db.once("open", () => {
    console.log("MongoDB database connection established successfully.");
  });
  db.on("error", console.error.bind(console, "MongoDB Connection Error"));

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.static("public"));
  server.use("/bulma", express.static("node_modules/bulma/"));

  server.use("/users", userRouter);
  server.use("/event", eventRouter);

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });
  server.get("/about", (req, res) => {
    return app.render(req, res, "/about", req.query);
  });
  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });
  server.get("/blog", (req, res) => {
    return app.render(req, res, "/blog", req.query);
  });
  server.get("/login", (req, res) => {
    return app.render(req, res, "/login", req.query);
  });
  server.get("/schedule", (req, res) => {
    return app.render(req, res, "/schedule", req.query);
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(config.port, () =>
    console.log(`Server is Running on PORT ${config.port} ....`)
  );
});
