const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    publicationYear: {
        type: Date,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
})

const book = mongoose.model('bookSchema', bookSchema)

module.exports = book