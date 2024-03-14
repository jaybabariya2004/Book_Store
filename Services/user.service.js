const { userSchema } = require('../Models')

const addUser = (body) => {
    return userSchema.create(body)
}

module.exports = { addUser }