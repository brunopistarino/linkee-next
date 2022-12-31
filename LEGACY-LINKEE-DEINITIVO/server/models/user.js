const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // minlength: 7,
  },
  //   tokens: [
  //     {
  //       token: {
  //         type: String,
  //         required: true,
  //       },
  //     },
  //   ],
});

module.exports = mongoose.model("User", userSchema);
