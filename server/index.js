const express = require("express");
const next = require("next");
const config = require("./config");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uid = require("uid-safe");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();

const dev = config.environment;
const app = next({ dev });
const handle = app.getRequestHandler();
const userRouter = require("./routes/users.routes");
const eventRouter = require("./routes/event.routes");
const signupRouter = require("./routes/signup.routes");
const Users = require("../models/user.model");

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
  const sessionConfig = {
    name: "sid",
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000,
      sameSite: true,
      secure: !config.environment
    },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: db })
  };
  const verifyLogin = (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    Users.findOne({ email: email }, function(err, user) {
      if (err) throw err;
      if (user) {
        if (!bcrypt.compareSync(password, user.password)) {
          res.redirect("/login");
          return { message: "Incorrect password." };
        }
        console.log(req.session);
        res.redirect("/profile");
      }
      next();
    });
  };

  const redirectLogin = (req, res, next) => {
    if (!req.session.userId) return res.redirect("/login");
    next();
  };
  const redirectHome = (req, res, next) => {
    if (req.session.userId) return res.redirect("/profile");
    next();
  };
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(session(sessionConfig));

  server.use(express.static("public"));
  server.use("/bulma", express.static("node_modules/bulma/"));

  server.use("/users", userRouter);
  server.use("/event", eventRouter);
  server.use("/profile", (req, res, next) => {
    // console.log(req.session);
    return app.render(req, res, "/profile", req.query);
    next();
  });

  server.get("/", redirectHome, (req, res) => {
    return app.render(req, res, "/", req.query);
  });
  server.get("/about", redirectHome, (req, res) => {
    return app.render(req, res, "/about", req.query);
  });
  server.get("/contact", redirectHome, (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });
  server.get("/blog", redirectHome, (req, res) => {
    return app.render(req, res, "/blog", req.query);
  });
  server.get("/login", redirectHome, (req, res) => {
    return app.render(req, res, "/login", req.query);
  });
  server.post("/login/verify", verifyLogin);
  server.route("/signup").get((req, res) => {
    return app.render(req, res, "/signup", req.query);
  });

  // server.get("/schedule", (req, res) => {
  //   return app.render(req, res, "/schedule", req.query);
  // });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(config.port, () =>
    console.log(`Server is Running on PORT ${config.port} ....`)
  );
});
