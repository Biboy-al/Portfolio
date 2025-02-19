const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    "name" : String,
    "desc" : String,
    "img" : String,
    "link" : String,
});

const model = mongoose.model('projects', schema);

module.exports = model;