const express = require('express');
const router = express.Router();

const programs = require('../models/programs');


module.exports = (req, res, next) => {

  programs.find({}, function(err, program) {
  var userMap = [];

  program.forEach(function(user) {
    userMap.push(user);
  });

  res.send(userMap);
});

}
