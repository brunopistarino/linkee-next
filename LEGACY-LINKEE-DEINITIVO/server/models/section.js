const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  emoji: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Section", sectionSchema);
