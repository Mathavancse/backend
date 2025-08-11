require("dotenv").config();
const mongoose = require("mongoose");
connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected");
  } catch (err) {
    console.log("mongodb not connected", err);
  }
};

module.exports = connectDB