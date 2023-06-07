const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};

module.exports = { connectDb };
