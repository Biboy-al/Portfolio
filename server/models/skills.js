const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    "name" : String,
    "desc" : String,
    "frame" : String,
    "lang" : String,
    "img" : String,
});

const model = mongoose.model('skills', schema);

module.exports = model;