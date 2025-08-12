const { connectDB } = require("./db/connectDB");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const urlRouter = require("./routes/url.route");

app.use("/short", urlRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Starts...");
  });
});
