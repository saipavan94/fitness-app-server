const express = require('express');
const router = express.Router();

const programs = require('../models/programs');


module.exports = (req, res, next) => {
  console.log(req.body.userId);
  programs.find({ userId : req.body.userId }, function(err, program) {
  var userMap = [];

  program.forEach(function(user) {
    userMap.push(user);
  });

  res.send(userMap);
});

}
