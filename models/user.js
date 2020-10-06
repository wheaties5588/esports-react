const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  securityQuestion1: { type: String },
  securityQuestion2: { type: String },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", bookSchema);

module.exports = User;