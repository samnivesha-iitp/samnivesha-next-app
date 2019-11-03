const router = require("express").Router();
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");

const Users = require("../../models/user.model");

router.route("/").get((req, res) => {
  Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error" + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const college = req.body.college;
  const password = req.body.password;
  const BCRYPT_SALT_ROUND = 12;

  bcrypt
    .hash(password, BCRYPT_SALT_ROUND)
    .then(function(hashedPassword) {
      const newUser = new Users({
        username,
        firstName,
        lastName,
        email,
        college,
        password: hashedPassword
      });
      newUser
        .save()
        .then(() => {
          res.json("User Added");
        })
        .catch(err => {
          res.status(400).json("Error" + err);
        });
    })
    .catch(err => {
      console.log("Error saving User...", err);
      next();
    });
});
module.exports = router;
