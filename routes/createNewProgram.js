const express = require('express');
const router = express.Router();
const programs = require('../models/programs');

module.exports = (req, res, next) => {

  let slotsData = {
    'program1' : {
      'time' : req.body.slotTime1,
      'capacity' : req.body.capacity1,
      'subs' : []
    },
    'program2' : {
      'time' : req.body.slotTime2,
      'capacity' : req.body.capacity2,
      'subs' : []
    },
    'program3' : {
      'time' : req.body.slotTime3,
      'capacity' : req.body.capacity3,
      'subs' : []
    }

  };

  let program = new programs({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    startDate : req.body.startDate,
    endDate : req.body.endDate,
    userId : req.body.userId,
    capacity : req.body.capacity,
    slots : JSON.stringify(slotsData)
  });

  program.save(function(err) {
    if (err) throw err;
    res.json({ success: true });
  });
}
