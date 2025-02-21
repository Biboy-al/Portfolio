const express = require('express');
const Skill = require('../models/skills');
const router = express.Router();


router.get( '/', async (req, res) =>{
    res.send(
      await Skill.find()
    )
});

router.post( '/', (req, res) =>{
  res.send({
      "hi":"hi"
    })
});

router.delete( '/', (req, res) =>{
  res.send({
      "hi":"hi"
    })
});

router.put( '/', (req, res) =>{
  res.send({
      "hi":"hi"
    })
});

module.exports = router;

