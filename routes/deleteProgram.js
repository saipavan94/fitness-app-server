const express = require('express');
const router = express.Router();

const programs = require('../models/programs');
const User = require('../models/CustomerRegistered');
const custInfo = require('../models/register');
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krishreddy56@gmail.com',
    pass: 'Krishnakan!123'
  }
});

module.exports = (req, res, next) => {
  console.log(req.body.data._id);
  var userMap = [];
  let i = 0;
  programs.findOne({ _id : req.body.data._id }, function(err, p) {
    if (err) {
      throw err
    }

      let slots = JSON.parse(p.slots)
      delete slots[req.body.slotNumber]
      console.log(slots);
      p.slots = JSON.stringify(slots)
      p.save();

      // res.json({status: false});
      User.find({ programId : req.body.data._id, slot : req.body.slotNumber }, function(err, program) {
      for (var i = 0; i < program.length; i++) {
        custInfo.findOne({userId : program[i].userId },function(err, cust) {
          console.log(cust.email);
          let mailOptions = {
            from: 'fitnessApp@fitness.com',
            to: cust.email,
            subject: req.body.data.name + " has been withdrawn.",
            text: "Your course '"+ req.body.data.name+"' no longer exisits. "
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              throw error
            }
            console.log(info);
            User.findOneAndRemove({ programId : req.body.data._id,slot : req.body.slotNumber  }, function(err, p) {
              console.log("p",p);

              if (err) {
                throw err
              }
                res.json({status: true});

            });
          });
        })
      }
  });
  });



}
