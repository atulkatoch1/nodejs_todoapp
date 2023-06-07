const express = require("express");
const userRouter = require("./routes/user.js");
const taskRouter = require("./routes/task.js");
const { config } = require("dotenv");
const cookieParser = require("cookie-parser");
const { errorMiddleware } = require("./middlewares/error.js");
const cors = require("cors");

const app = express();
config({
  path: "./data/config.env",
});

// using middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// using error middleware
app.use(errorMiddleware);

module.exports = { app };
