const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(uri);
};

module.exports = connectDB;
