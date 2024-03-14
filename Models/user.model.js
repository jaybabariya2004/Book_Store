const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        require: true,
        trim: true,
    },
    Email: {
        type: String,
        require: true,
    },
    password: {
        type: Number,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    mobile: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male',
    },
    city: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    }
})

const user = mongoose.model('userSchema', userSchema)

module.exports = user