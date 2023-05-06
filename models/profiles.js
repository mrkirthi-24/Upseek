const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmEmail: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  place: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
});

const Profile = new mongoose.model("Profile", userSchema);

module.exports = Profile;
