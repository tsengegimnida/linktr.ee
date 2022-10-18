const express = require("express");
const app = express();

const mongoose = require("mongoose");
const UserModel = require("./models/User");
const LinkModel = require("./models/Link");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://tsengeg:Hw1E9hyIyGChjZUG@cluster0.ocgyx.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
