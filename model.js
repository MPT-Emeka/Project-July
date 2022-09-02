const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        required: true
    },
    Linkedin: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
});

module.exports = mongoose.model('model', userSchema);