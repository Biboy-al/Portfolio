const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    "name" : String,
    "desc" : String,
    "prof" : String,
    "img" : String,
});

const model = mongoose.model('skills', schema);

module.exports = model;