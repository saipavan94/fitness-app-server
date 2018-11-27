const express = require('express');
const router = express.Router();

const User = require('../models/CustomerRegistered');


module.exports = (req, res, next) => {
  User.findOne({
    userId: req.body.userId,
    programId : req.body.programId
  }, function(err, user) {
    console.log(user.data);
    res.json({success : true, data : user.data })
  })
}
