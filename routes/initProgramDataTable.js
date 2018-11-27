const express = require('express');
const router = express.Router();

const Programs = require('../models/CustomerRegistered');
const User = require('../models/register');


module.exports = (req, res, next) => {
  var Data = []
  Programs.find({
    programId : req.body.programId
  }, function(err, program) {
    // console.log(program);
    for (var i = 0; i < program.length; i++) {
      User.findOne({
        userId : program[i].userId
      }, function(err, user) {
        // console.log(user);
        Data.push(user);
        console.log(Data);
        if (Data.length == program.length) {
          console.log(Data);
          res.json({success : true, data : Data })
        }
      });
    }
    // console.log(user.data);
  })
}
