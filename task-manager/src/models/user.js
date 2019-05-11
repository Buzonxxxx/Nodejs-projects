const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Email is invalid.");
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value.length < 0) throw new Error("Age must be a postive number.");
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (validator.contains(value.toLowerCase(), "password"))
        throw new Error("Password Should not contains 'password'");
    }
  }
});

module.exports = User;
