const Users = require("../models/user.model");
const bcrypt = require("bcrypt");

const verifyLogin = (req, res, next) => {
  const { email, password } = req.body;

  Users.findOne({ email: email }, "email +password", function(err, user) {
    if (err) throw err;
    if (user) {
      if (!bcrypt.compareSync(password, user.password)) {
        res.redirect("/login");
        return { message: "Incorrect password." };
      }
      req.session.userId = user._id;
      res.redirect("/profile");
    }
    next();
  });
};
module.exports = verifyLogin;
