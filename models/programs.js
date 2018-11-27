const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerUser = new Schema({
  name: String,
  description: String,
  cost: String,
  startDate: String,
  endDate: String,
  slots: String,
  userId: String
  // capacity: String
});

module.exports = mongoose.model('fitnessPrograms', registerUser);
