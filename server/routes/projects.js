const express = require('express');
const Project = require('../models/projects');
const router = express.Router();


   
router.get( '/', (req, res) =>{
    res.send('Obtaining projects')
})


module.exports = router;