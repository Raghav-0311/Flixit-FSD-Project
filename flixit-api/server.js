const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
// const DB = process.env.DB;
const DB_CONNECTION_STRING = process.env.FLIXIT_DB_CONNECTION;

mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully !");
  });

app.use(cors());
app.use(express.json());

app.listen(5000, console.log(`Server Started at port ${PORT}...`));
