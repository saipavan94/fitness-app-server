const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerUser = new Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
  userId: String,
  rights : String
});

module.exports = mongoose.model('fitnessRegisteredUser', registerUser);
