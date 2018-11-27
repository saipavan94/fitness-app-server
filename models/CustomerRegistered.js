const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerUser = new Schema({
  userId: String,
  programId: String,
  slot : String,
  data : []
});

module.exports = mongoose.model('fitnessCustomeredRegistered', registerUser);
