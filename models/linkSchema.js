const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
    },
    totalclick: {
        type: Number
    },
    paragraph: {
        type: String,
        default: "NA"
    },
    imagePath: {
        type: String,
        default: "NA"        
    },
    order: {
        type: Number,
        default: 10
    }
})

module.exports = mongoose.model('Links', linkSchema) 