const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Section",
  },
});

module.exports = mongoose.model("Link", linkSchema);
