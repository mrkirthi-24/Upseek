const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const Profile = require("./models/profiles");
require("dotenv").config();

const app = express();
const upload = multer({ dest: "resumes" });

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const candidateDate = new Profile({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      confirmEmail: req.body.confirmEmail,
      phone: req.body.phone,
      place: req.body.place,
      path: req.file.path,
      originalName: req.file.originalname,
    });
    console.log(candidateDate);
    await candidateDate.save();
    res.status(201).send("<h1>Candidate has successfully registered...🥳</h1>");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.listen(process.env.PORT, (error) => {
  if (error) throw error;
  console.log(`Port 3000 listening...`);
});
