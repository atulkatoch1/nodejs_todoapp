const { app } = require("./app");
const { connectDb } = require("./data/database.js");

connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server is working port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
