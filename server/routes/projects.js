const express = require('express');
const Project = require('../models/projects');
const router = express.Router();

router.get( '/', async (req, res) =>{
    res.send(
      await Project.find()
    )

});

router.post( '/', (req, res) =>{

    const query = req.query;

    const project = new Project({
        name : query.name,
        desc : query.desc,
        img : "",
        link : "https://github.com/Biboy-al/Portfolio",
    });

    project.save().then((saved=>{
        //checks whenever it was saved
        if(saved == project){
            res.send({
                "raction":"good"
              })
        }else{
            res.send({
                "raction":"bad"
              })
        }
    }))

  
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