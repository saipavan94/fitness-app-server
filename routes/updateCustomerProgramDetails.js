const express = require('express');
const router = express.Router();

const User = require('../models/CustomerRegistered');


module.exports = (req, res, next) => {
  console.log(req.body.userId);
  var userMap = [];
  let i = 0;
  User.findOne({
    userId: req.body.userId,
    programId : req.body.programId
  }, function(err, user) {
    console.log(user.data);
    let data = user.data
    data.push(req.body.data);
    user.data = data;
    console.log(user.data );
    user.save(function (err) {
      if (err) {
        res.json({success : false})
      }
      res.json({success : true})
    });

  });


}
