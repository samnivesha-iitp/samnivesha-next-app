const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4
    },
    firstName: {
      type: String,
      required: true,
      minlength: 3
    },
    lastName: {
      type: String,
      required: false,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      minlength: 5
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      select: false
    },
    college: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
userSchema.virtual("fullName").get(() => {
  return this.firstName + " " + this.lastName;
});
const User = mongoose.model("User", userSchema);
module.exports = User;
