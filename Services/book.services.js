const { bookSchema } = require("../Models")


const addBook = (body) => {
    return bookSchema.create(body)
}

const getBook = () => {
    return bookSchema.find()
}

const deleteBook = (id) => {
    return bookSchema.findByIdAndDelete(id)
}

module.exports = { addBook, getBook, deleteBook }