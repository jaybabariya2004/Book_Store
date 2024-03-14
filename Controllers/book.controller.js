const { bookServices } = require("../Services")


const addBook = async (req, res) => {

    const book = await bookServices.addBook(req.body)

    res.status(200).json({
        message: "Book Upload sucessfully",
        book
    })

}

const getBook = async (req, res) => {

    const book = await bookService.getBook()

    res.status(200).json({
        message: "get succes",
        book
    })

}

const deleteBook = async (req, res) => {
    try {

        let { id } = req.params;
        console.log(id);

        const book = await bookService.deleteBook(id);

        res.status(200).json({
            message: "delete successs",
            book
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}



module.exports = { addBook, getBook, deleteBook }