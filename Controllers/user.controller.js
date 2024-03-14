const { userService } = require("../Services")


const addUser = async (req, res) => {


    const user = await userService.addUser(req.body)

    res.status(200).json({
        message: "User register sucessfully",
        user
    })
}

const getRegister = async (req, res) => {

    res.status(200).render('register')
}

const getLogin = async (req, res) => {
    res.status(200).json({
        data: req.body
    })
}

const getLoginPage = async (req, res) => {
    res.status(200).render('login')
}

module.exports = { addUser, getRegister, getLogin, getLoginPage }