const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema(
  {
    urlId: {
      type: String,
      required: true,
      unique: true,
    },
    redirect: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("URL", URLSchema);

module.exports = URL;
