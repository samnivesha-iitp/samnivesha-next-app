const express = require("express");
const next = require("next");
const config = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uid = require("uid-safe");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();

const dev = config.environment;
const app = next({ dev });
const handle = app.getRequestHandler();
const userRouter = require("./routes/users.routes");
const eventRouter = require("./routes/event.routes");
const signupRouter = require("./routes/signup.routes");
const verifyLogin = require("../utils/verifylogin");
const { redirectHome, redirectLogin } = require("../utils/redirect");
const sendMail = require("../utils/sendmail");
const sessionConfig = require("../utils/sessionconfig")(
  uid,
  config,
  MongoStore,
  mongoose.connection
);

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
  server.use(session(sessionConfig));

  server.use(express.static("public"));
  server.use("/bulma", express.static("node_modules/bulma/"));

  server.use("/users", userRouter);
  server.use("/event", eventRouter);
  server.use("/profile", redirectLogin, (req, res, next) => {
    // console.log(req.session);
    return app.render(req, res, "/profile", req.query);
    next();
  });

  server.get("/about", redirectHome, (req, res) => {
    return app.render(req, res, "/about", req.query);
  });
  server.post("/mail", redirectHome, sendMail);
  server.get("/contact", redirectHome, (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });
  server.get("/blog", redirectHome, (req, res) => {
    return app.render(req, res, "/blog", req.query);
  });
  server.post("/login/verify", redirectHome, verifyLogin);
  server.get("/login", redirectHome, (req, res) => {
    return app.render(req, res, "/login", req.query);
  });
  server.get("/logout", redirectLogin, (req, res) => {
    req.session.destroy(function(err) {
      if (err) {
        res.redirect("/profile");
        throw err;
      }
      res.redirect("/");
    });
  });
  server.get("/signup", redirectHome, (req, res) => {
    return app.render(req, res, "/signup", req.query);
  });

  server.get("/schedule", redirectLogin, (req, res) => {
    return app.render(req, res, "/schedule", req.query);
  });
  server.get("/", redirectHome, (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(config.port, () =>
    console.log(`Server is Running on PORT ${config.port} ....`)
  );
});
