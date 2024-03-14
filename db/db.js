const mongoose = require('mongoose')
const connectdb = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/book_store_details').then(() => {
        console.log('db connected');
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connectdb