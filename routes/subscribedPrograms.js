const express = require('express');
const router = express.Router();

const programs = require('../models/programs');
const User = require('../models/CustomerRegistered');


module.exports = (req, res, next) => {
  console.log(req.body.userId);
  var userMap = [];
  let i = 0;
  User.find({ userId : req.body.userId }, function(err, program) {
    console.log(program.length);
  program.forEach(function(user) {
    i++;
    programs.findOne({ _id : user.programId }, function(err, p) {
          let d ={
            pData : p,
            cData : user.data,
            selectedSlot : user.slot
          }
          userMap.push(d);
          console.log(i, program.length, userMap);
          if (userMap.length == program.length) {
            // console.log(userMap);
            res.send(userMap);
          }
    });
  });

});


}
