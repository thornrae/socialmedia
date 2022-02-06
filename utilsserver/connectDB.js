const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
      console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDb;
