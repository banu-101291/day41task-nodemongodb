const mongoose = require('mongoose');

const BookSchema =new  mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('books', BookSchema);