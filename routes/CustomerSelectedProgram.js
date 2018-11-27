const express = require('express');
const router = express.Router();
const fs = require('fs')
const dir = './UsersData';
const User = require('../models/CustomerRegistered');
const programs = require('../models/programs');


module.exports = (req, res, next) => {
  let userId = req.body.userId;
  let pId = req.body.programId;
  // console.log(pId);
  programs.findOne({ _id : pId }, function(err, program) {

    console.log(program);
    slotsData = JSON.parse(program['slots']);
    // slotsData[req.body.slotNumber].capacity  = parseInt(slotsData[req.body.slotNumber].capacity );
    console.log(slotsData[req.body.slotNumber].capacity -1);
    slotsData[req.body.slotNumber].capacity = slotsData[req.body.slotNumber].capacity -1;
    // if (slotsData[req.body.slotNumber].subs.indexOf(req.body.userId) != -1) {
      slotsData[req.body.slotNumber].subs.push(req.body.userId);
    // }else{
      // res.json({success:'registered'})
    // }
    console.log(slotsData);

    // if (slotsData[req.body.slotNumber].capacity > 0) {
      program.slots = JSON.stringify(slotsData);
      // program.save();
      program.save();
      let newUser = new User({
        userId: req.body.userId,
        programId: req.body.programId,
        slot : req.body.slotNumber,
        data : []
      });

      newUser.save(function(err) {
        if (err) throw err;
        res.json({ success: true });
      });
    // }else {
    //   res.json({ success: false, capacity : 'full' });
    //
    // }

});
}
