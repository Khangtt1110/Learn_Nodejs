const mongoose = require('mongoose')

const Schema = mongoose.Schema

//* Create a interface
const User = new Schema({
    username: { type: String, default: 'Khang' },
    password: { type: String, default: 'Khang' },
    old: { type: Number },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Nodejs', User, 'User')
