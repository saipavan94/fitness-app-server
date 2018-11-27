const express = require('express');
const router = express.Router();
const fs = require('fs')
const dir = './UsersData';
const User = require('../models/register');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krishreddy56@gmail.com',
    pass: 'krishnakan!123'
  }
});

module.exports = (req, res, next) => {
  let userId = req.body.instructorId;
  User.findOne({
    userId: userId
  }, function(err, user) {
    if (err) {
      res.json({success : false});
    }
    // console.log(user.email);
    // let filKeys = JSON.parse(user.fileKeys)
    // console.log(filKeys[file]);
    let mailOptions = {
      from: req.body.customerEmail,
      to: user.email,
      subject: req.body.data.subject,
      text: req.body.data.body
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.json({"success" : false})
        console.log(error);

      } else {
        res.json({"success" : true})

        console.log('Email sent: ' + info.response);
      }
    });
  //
  });

}
