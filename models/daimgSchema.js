const mongoose = require('mongoose');

const daimgSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        default: "NA",
    },
    totalclick: {
        type: Number
    },    
    link: {
        type: String,
    },
})

module.exports = mongoose.model('Daimg', daimgSchema)