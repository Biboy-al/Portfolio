const express = require('express');
const Skill = require('../models/skills');
const router = express.Router();


router.get( '/', async (req, res) =>{
    res.status(200).send(
      await Skill.find()
    )
});

router.post( '/', (req, res) =>{
  res.status(200).send({
      "hi":"hi"
    })
});

router.delete( '/', (req, res) =>{
  res.status(200).send({
      "hi":"hi"
    })
});

router.put( '/', (req, res) =>{
  res.status(200).send({
      "hi":"hi"
    })
});

module.exports = router;

